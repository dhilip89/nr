
import Style from './graphic/style';

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Paint the base shape.
 */
export default class Painter {
    /**
     * Constructor.
     * @param {Canvas2DContext} context 
     */
    constructor(context) {
        this.context = context;
    }

    /**
     * Paint base shape to canvas.
     * @param {Shape} shape 
     */
    paint(shape) {
        let shapeStyle = shape.opts.style;
        let style = new Style(shapeStyle);
        style.bind(this.context); // bind style to context.
        shape.buildPath(this.context); // paint base shape.
    }

    /**
     * Clear canvas.
     */
    clear(x, y, width, height) {
        this.context.clearRect(x, y, width, height);
    }
}