import { STORAGE_LOCATION } from "$env/static/private";
import { db } from "$lib/db";
import type { AbstractDrive } from "$lib/server/drive";
import { createWriteStream, createReadStream } from 'node:fs';
import stream from 'node:stream';
import { join } from 'node:path';
import mime from 'mime';

export class Local implements AbstractDrive {
    put(file: File, locals: App.Locals): ReadableStream {
        return new ReadableStream<string>({
            async start(controller) {
                const fileStream = await file.stream();
                const location = join(STORAGE_LOCATION, file.name);
                const writeStream = createWriteStream(location);
                const reader = fileStream.getReader();

                let bytesWritten = 0;

                while (true) {
                    const { done, value } = await reader.read();

                    if (done) {
                        writeStream.end();
                        break;
                    }
                    
                    bytesWritten += value.length;
                    
                    writeStream.write(value);
                }

                await new Promise((resolve, reject) => {
                    writeStream.on('finish', resolve);
                    writeStream.on('error', reject);
                });

                const prismaFile = await db.file.create({
                    data: {
                        location,
                        title: file.name,
                        user: {
                            connect: {
                                id: locals.session?.userId ?? 'clvgptwsx0410oubsdii7vbr1' // Default is pyrodata user
                            }
                        },
                        mimeType: mime.getType(location)
                    }
                })
                
                controller.enqueue(JSON.stringify({ status: 201, data: prismaFile }));
            }
        })
    }
    get(): void {
        throw new Error("Method not implemented.");
    }
    delete(): void {
        throw new Error("Method not implemented.");
    }
}