import type { AbstractDrive } from "$lib/server/drive";
import { S3_ACCESS_KEY, S3_BUCKET, S3_CLIENT_KEY, S3_ENDPOINT, S3_REGION } from "$env/static/private";
import { db } from "$lib/db";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { Upload } from '@aws-sdk/lib-storage';
import mime from 'mime';

export const client = new S3Client({
    credentials: {
        accessKeyId: S3_ACCESS_KEY,
        secretAccessKey: S3_CLIENT_KEY
    },
    region: S3_REGION,
    endpoint: S3_ENDPOINT,
    forcePathStyle: true
})

export class S3 implements AbstractDrive {    
    put(file: File, locals: App.Locals) {
        return new ReadableStream<string>({
            async start(controller) {
                const data = await file.stream();
                const upload = new Upload({
                    client,
                    params: {
                        Bucket: S3_BUCKET,
                        Key: file.name,
                        Body: data,
                    }
                })

                upload.on("httpUploadProgress", (progress) => {
                   controller.enqueue(JSON.stringify({ status: 202, data: { loaded: progress.loaded, size: file.size } }))
                });

                const response = await upload.done();
                const prismaFile = await db.file.create({
                    data: {
                        location: response.Location!,
                        title: response.Key!,
                        user: {
                            connect: {
                                id: locals.session?.userId ?? 'clvgptwsx0410oubsdii7vbr1' // Default is pyrodata user
                            }
                        },
                        mimeType: mime.getType(response.Location!)
                    }
                })
                
                controller.enqueue(JSON.stringify({ status: 201, data: prismaFile }));

                // Make sure to close the controller!
                controller.close();
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

// const client = new S3Client({
//     credentials: {
//         accessKeyId: S3_ACCESS_KEY,
//         secretAccessKey: S3_CLIENT_KEY
//     },
//     region: S3_REGION,
//     endpoint: S3_ENDPOINT,
//     forcePathStyle: true
// })

// export const upload = async ( file: File, session: App.Locals['session'], controller?: ReadableStreamDefaultController ) => {
//     try {
//         const data = await file.stream();
//         const upload = new Upload({
//             client,
//             params: {
//                 Bucket: S3_BUCKET,
//                 Key: file.name,
//                 Body: data,
//             },
//             queueSize: 1
//         })

//         upload.on("httpUploadProgress", (progress) => {
//             controller?.enqueue(JSON.stringify({ status: 202, data: { loaded: progress.loaded, size: file.size } }))
//         });

//         const response = await upload.done();
//         const prismaFile = await db.file.create({
//             data: {
//                 location: response.Location!,
//                 title: response.Key!,
//                 user: {
//                     connect: {
//                         id: session?.userId ?? 'clvgptwsx0410oubsdii7vbr1' // Default is pyrodata user
//                     }
//                 },
//                 mimeType: mime.getType(response.Location!)
//             }
//         })
        
//         controller?.enqueue(JSON.stringify({ status: 201, data: prismaFile }));

//         // Make sure to close the controller!
//         controller?.close();
//     } catch(e) {
//         controller?.enqueue(JSON.stringify({ status: 400, data: 'Could not upload file.' }));
//         controller?.close();
//     }
// }