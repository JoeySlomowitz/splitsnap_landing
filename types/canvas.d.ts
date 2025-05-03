
declare module "@napi-rs/canvas" {
    export function createCanvas(width: number, height: number): Canvas;
    export function loadImage(src: string): Promise<Image>;
    export function registerFont(path: string, options: { family: string }): void;
}