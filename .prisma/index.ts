import { PrismaClient } from "@prisma/client";
import axios from "axios";
import * as cheerio from "cheerio";
import slugify from "slugify";
import mime from 'mime';

const prisma = new PrismaClient();
const pyrodataUrl = 'https://pyrodata-production.up.railway.app/pyrodata';

enum Hazards {
    explosive = 1,
    flammable = 2,
    oxidizing = 3,
    corrosive = 4,
    deadly = 5,
    environment = 6,
    hazardous = 7,
    irritating = 8,
}
const chemicals: any[] = [];

const response = await axios.get(`${pyrodataUrl}/chemicals.html`);
const selector = cheerio.load(response.data);

const chemicalElements = selector('.chemi-table')

function getHazardSymbolId( name: string ) {
    if( name === 'Oxidizing hazard' ) {
        return Hazards.oxidizing;
    }

    if( name === 'Toxic' ) {
        return Hazards.deadly;
    }

    if( name === 'Explosive' ) {
        return Hazards.explosive;
    }

    if( name === 'Harmful to the environment ' ) {
        return Hazards.environment;
    }

    if( name === 'Irritant' ) {
        return Hazards.irritating;
    }

    if( name === 'Highly Flammable' ) {
        return Hazards.flammable;
    }

    if( name === 'Corrosive' ) {
        return Hazards.corrosive;
    }

    if( name === 'Harmful' ) {
        return Hazards.hazardous;
    }
}

for await( const element of chemicalElements ) {
    const url = selector(element).find('a').attr('href');
    
    if( ! url ) continue;

    const response = await axios.get(pyrodataUrl + '/' + url);
    const $ = await cheerio.load(response.data);

    const chemical = {
        url: pyrodataUrl + '/' + url,
        name: $('.page__title').text(),
        slug: slugify($('.page__title').text(), { lower: true }),
        formula: $('.field-name-field-symbol').find('p').text(),
        description: 
            $('.field-name-field-description').find('p').map((i, el) => `<p>${$(el).text()}</p>`).toArray().join('') +
            $('.field-name-field-sources').find('p').map((i, el) => `<p>${$(el).text()}</p>`).toArray().join('') +
            $('.field-name-field-hazard-descr').find('p').map((i, el) => `<p>${$(el).text()}</p>`).toArray().join(''),
        hazards: $('.field-name-field-hazards').find('img').map((i, el) => $(el).attr('title') ? getHazardSymbolId($(el).attr('title')!) : '').toArray(),
        image: pyrodataUrl + '/' + $('.field-name-field-indegriedient-image').find('img').attr('src')?.replace('..', '')
    }

    try {
        const image = await axios.get(chemical.image, { responseType: 'arraybuffer' });
        const path = `/home/codeit/pyrodata-v2/static/uploads/${chemical.slug}.jpg`;

        await Bun.write(path, image.data);

        const file = await prisma.file.upsert({
            create: {
                name: `${chemical.slug}.jpg`,
                description: '',
                title: chemical.name,
                mimeType: mime.getType(path)
            },
            update: {
                name: `${chemical.slug}.jpg`,
                description: '',
                title: chemical.name,
                mimeType: mime.getType(path)
            },
            where: {
                name: `${chemical.slug}.jpg`
            }
        })

        await prisma.chemical.upsert({
            create: {
                formula: chemical.formula,
                name: chemical.name,
                page: {
                    create: {
                        slug: chemical.slug,
                        title: chemical.name,
                        featuredImage: {
                            connect: file
                        },
                        content: {
                            create: {
                                html: chemical.description
                            }
                        }
                    }
                }
            },
            update: {
                formula: chemical.formula,
                name: chemical.name,
                page: {
                    update: {
                        slug: chemical.slug,
                        title: chemical.name,
                        featuredImage: {
                            connect: file
                        },
                        content: {
                            create: {
                                html: chemical.description
                            }
                        }
                    }
                }
            },
            where: {
                name: chemical.name
            }
        })

        console.log('✅', chemical.slug);
    } catch(e) {
        console.error('Failed', e.message);
    }
}

// Bun.write('./data/chemicals.json', JSON.stringify(chemicals, null, 4));