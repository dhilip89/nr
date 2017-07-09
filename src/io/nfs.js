import fs from 'fs';

/**
 * Nfs is nrenderer file system. Some operations about IO.
 */
export default class Nfs {
    constructor() {

    }

    /**
     * Save canvas as a png file.
     * @param {* Canvas} canvas Create by you. Imported from 'canvas/lib/canvas'.
     * @param {* string} path Save path of png file.
     */
    static saveAsPNG(canvas, path) {
        path = path.endsWith('.png') ? path : `${path}.png`;

        try {
            canvas.pngStream().pipe(fs.createWriteStream(path));
        }
        catch (error) {
            console.error(error);
        }
    }
}