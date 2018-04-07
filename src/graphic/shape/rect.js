import Shape from '../shape';

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Circle shape.
 */
export default class Rect extends Shape {
    constructor(opts) {
        super(...arguments);
        this.type = "Rect";
        this.x = opts.shape.x || 0;
        this.y = opts.shape.y || 0;
        this.width = opts.shape.width || 150;
        this.height = opts.shape.height || 75;
    }

    buildPath(context) {
        let { x, y, width, height } = this;
        context.rect(x, y, width, height);
    }
}