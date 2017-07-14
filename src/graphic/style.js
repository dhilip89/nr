/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Process about style and bind style to Canvas2DContext.
 */
export default class Style {
    constructor(style) {
        this.style = style;
    }

    bind(context) {
        let styleName = Object.keys(this.style);

        for (let i = 0; i < styleName.length; i++) {
            context[styleName[i]] = this.style[styleName[i]];
        }
    }
}