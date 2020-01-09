export class StorageHelper {
    getItem(item: string) {
        return JSON.parse((localStorage.getItem(item)));
    }
    setItem(item: string, data: any) {
        return localStorage.setItem(item, JSON.stringify(data));
    }
}
