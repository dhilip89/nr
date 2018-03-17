
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
        this.context.beginPath();
        shape.buildPath(this.context); // paint base shape.
        shape.hasStroke() && this.context.stroke();
        shape.hasFill() && this.context.fill();

        this.context.closePath();
    }

    /**
     * Paint all shapes.
     * @param {Array} shapes 
     */
    paintAll(shapes) {
        for (let i = 0; i < shapes.length; i++) {
            this.paint(shapes[i]);
        }
    }

    /**
     * Clear canvas.
     */
    clear(x, y, width, height) {
        this.context.clearRect(x, y, width, height);
    }
}