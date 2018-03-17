/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Base shape.
 */
export default class Shape {
    constructor(opts) {
        this.opts = opts;
    }

    buildPath(context) {

    }

    hasStroke() {
    	return !!this.opts.style.strokeStyle;
    }

    hasFill() {
    	return !!this.opts.style.fillStyle;
    }
}