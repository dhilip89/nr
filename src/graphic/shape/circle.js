import Shape from '../shape';

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Circle shape.
 */
export default class Circle extends Shape {
    constructor(opts) {
        super(opts);
        this.type = 'circle';

        this.cx = opts.shape.cx || 150;
        this.cy = opts.shape.cy || 75;
        this.r = opts.shape.r || 5;
    }

    buildPath(context) {
        let { cx, cy, r } = this;
        context.arc(cx, cy, r, 0, 2 * Math.PI, true);
        // context.fill();
        // context.stroke();
    }
}