import { STORAGE_DRIVE } from "$env/static/private";
import { Local } from "./local";
import { S3 } from "./s3";


export type AbstractDrive = {
    put(file: File, locals: App.Locals): ReadableStream;
    get(): void;
    delete(): void;
}

export type Drives = {
    [K in App.Settings['drives']]: AbstractDrive;
}

export class Drive {
    private static drives: Drives = {
        local: new Local,
        s3: new S3
    }

    public static use( drive: App.Settings['drives'] ) {
        return this.drives[drive];
    }

    static put(file: File, locals: App.Locals) {
        return this.drives[STORAGE_DRIVE as App.Settings['drives']].put(file, locals);
    }
    static get() {
        return this.drives[STORAGE_DRIVE as App.Settings['drives']];
    }
    static delete() {
        return this.drives[STORAGE_DRIVE as App.Settings['drives']];
    }
}