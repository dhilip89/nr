import Shape from '../shape';

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Polyline.
 */
export default class Polyline extends Shape {
    constructor(opts) {
        super(opts);
        this.type = 'polyline';

        this.points = opts.shape['points'] || [];
    }

    buildPath(context) {
        context.beginPath();
        context.moveTo(this.points[0][0], this.points[0][1]);

        for (let i = 0; i < this.points.length; i++) {
            context.lineTo(this.points[i][0], this.points[i][1]);
        }

        // context.stroke();
        context.closePath();
    }
}