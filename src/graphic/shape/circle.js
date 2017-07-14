import Shape from '../shape';

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Circle shape.
 */
export default class Circle extends Shape {
    constructor(opts) {
        super(opts);
    }

    buildPath(context) {
        context.beginPath();
        let shape = this.opts.shape;
        context.arc(shape.cx, shape.cy, shape.r, 0, 2 * Math.PI, true);
        context.fill();
        context.stroke();
        context.closePath();
    }
}