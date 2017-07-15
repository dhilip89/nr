import Shape from '../shape';

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Circle shape.
 */
export default class Line extends Shape {
    constructor(opts) {
        super(opts);

        this.x1 = opts.shape.x1 || 0;
        this.y1 = opts.shape.y1 || 0;
        this.x2 = opts.shape.x2 || 150;
        this.y2 = opts.shape.y2 || 75;

        // this.style = Object.assign({}, {
        //     strokeStyle: 'black',
        //     lineWidth: 1
        // }, opts.style);
    }

    buildPath(context) {
        let { x1, y1, x2, y2 } = this;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
    }
}