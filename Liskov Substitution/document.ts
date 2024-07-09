import { Openable, Printable, resizable } from "./interfaces";


class WordDocument implements Openable, Printable{
    open(): boolean {
        return true;
    }
    close(): boolean {
        return true;
    }
    print(): void {
        console.log("print word document");
    } 
}

class ImageDocument implements Openable, Printable, resizable{
    open(): boolean {
        return true;
    }
    close(): boolean {
        return true;
    }
    print(): void {
        console.log("print image document");
    }
    resize(width : number, height : number): void {
        console.log("resize image document");
    }
}