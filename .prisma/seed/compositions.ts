import { Composition, CompositionCategory, Prisma, PrismaClient } from "@prisma/client";
import axios from "axios";
import * as cheerio from "cheerio";
import slugify from "slugify";

const prisma = new PrismaClient();
const pyrodataUrl = 'https://pyrodata-production.up.railway.app/pyrodata';

let compositionCategories: CompositionCategory[] = [];

async function seedCategories() {
    const categories = [
        'Stars',
        'Primes',
        'Burst charges',
        'Flash powder',
        'Whistle mix',
        'Propellants',
        'Smoke',
        'Sparklers',
        'Flares'
    ] as const;

    for await( const category of categories ) {
        const cat = await prisma.compositionCategory.upsert({
            create: {
                name: category,
                slug: slugify(category, { lower: true })
            },
            update: {
                name: category,
                slug: slugify(category, { lower: true })
            },
            where: {
                slug: slugify(category, { lower: true })
            }
        })

        compositionCategories.push(cat)
    }
}

async function importCompositions() {
    // Need categories before import!
    await seedCategories();

    const response = await axios.get(pyrodataUrl + '/composition/stars.html');
    const $ = await cheerio.load(response.data);

    const reciepeElements = $('.node-recipe').toArray();

    for( const element of reciepeElements ) {
        const ingredients: Prisma.IngredientCreateNestedManyWithoutCompositionInput['create'] = await Promise.all($(element).find('[typeof=schema:Ingredient]').toArray().map(async element => {
            const amount = parseFloat($(element).find('.quantity-unit').text())
            const name = $(element).find('.ingredient-name a').text() !== '' 
                ? $(element).find('.ingredient-name a').text() 
                : $(element).find('.ingredient-name').text();
            const note = $(element).find('.ingredient-name a')[0]?.nextSibling?.nodeValue?.replace(' ', '').replace('(', '').replace(')', '');
            

            const page = await prisma.page.findFirst({
                where: {
                    slug: slugify(name, { lower: true })
                }
            })

            return {
                amount,
                name,
                note,
                pageId: page?.id
            }
        }))

        const reciepe: Prisma.CompositionCreateInput = {
            name: $(element).find('.node-title').text(),
            categories: {
                connect: {
                    name: 'Stars'
                }
            },
            ingredients: {
                create: ingredients
            },
            submittedBy: {
                connect: {
                    id: 'clvgptwsx0000oubjdii7vbr0'
                }
            }
        }

        //await prisma.composition.deleteMany();
        await prisma.composition.upsert({
            create: reciepe,
            update: reciepe,
            where: {
                name: reciepe.name
            }
        })

        console.log('✅', reciepe.name);
    }
}

importCompositions();