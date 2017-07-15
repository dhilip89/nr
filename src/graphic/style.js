/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Process about style and bind style to Canvas2DContext.
 */
export default class Style {
    constructor(style) {
        this.style = style;
    }

    /**
     * Set context style.
     * @param {CanvasRenderingContext2D} context 
     */
    bind(context) {
        this.reset(context);
        console.log(this.style)
        let styleName = Object.keys(this.style);

        for (let i = 0; i < styleName.length; i++) {
            context[styleName[i]] = this.style[styleName[i]];
        }
    }

    /**
     * Reset context style.
     * @param {CanvasRenderingContext2D} context 
     */
    reset(context) {
        let styles = {
            fillStyle: 'rgba(0,0,0,0)',
            strokeStyle: 'rgba(0,0,0,0)',
            shadowColor: 'rgb(0, 0, 0)',
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            lineCap: 'butt',
            lineJoin: 'bevel',
            lineWidth: 0,
            miterLimit: 0,
            font: '微软雅黑 12px',
            textAlign: 'center',
            textBaseline: 'alphabetic'
        };

        let styleName = Object.keys(styles);

        for (let i = 0; i < styleName.length; i++) {
            context[styleName[i]] = styles[styleName[i]];
        }
    }
}