/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Base shape.
 */
export default class Shape {
    constructor(opts) {
        this.opts = opts;
        this.shape = opts.shape;
    }

    /**
     * Must be override.
     * @param {CanvasRenderingContext2D} context 
     */
    buildPath(context) {
       if(!this.shape) {
          throw new Error("You don't set the graphic shape.");
          return;
       }
    }

    /**
     * Has stroke color.
     */
    hasStroke() {
    	return !!this.opts.style.strokeStyle;
    }

    /**
     * Has fill color.
     */
    hasFill() {
    	return !!this.opts.style.fillStyle;
    }
}