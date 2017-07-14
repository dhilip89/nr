/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Storage is the save manager of NRender.
 */
export default class Storage {
    constructor() {
        this.shapes = []; // Save all the base shapes.
    }

    /**
     * Add shape to storage.
     * @param {Shape} shape 
     */
    add(shape) {
        this.shapes.push(shape);
    }

    /**
     * Remove shape from storage.
     * @param {Shape} shape 
     */
    remove(shape) {
        let index = this.shapes.indexOf(shape);

        if (index != -1) {
            this.shapes.splice(index, 1);
        }
    }

    /**
     * Get the size of shapes.
     */
    count() {
        return this.shapes.length;
    }
}