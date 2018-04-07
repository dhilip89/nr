import Shape from "../shape";

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Arc shape.
 */
export default class Arc extends Shape {
  constructor(opts) {
    super(...arguments);
    this.type = "Arc";
    this.cx = opts.shape.cx || 150;
    this.cy = opts.shape.cy || 75;
    this.r = opts.shape.r || 5;
    this.startAngle = opts.shape.startAngle || 0;
    this.endAngle = opts.shape.endAngle || 0;
    this.clockwise = opts.shape.clockwise || true;
  }

  buildPath(context) {
    super.buildPath(context);

    let { cx, cy, r, startAngle, endAngle, clockwise } = this;
    //  var unitX = Math.cos(startAngle);
    //  var unitY = Math.sin(startAngle);

    // context.moveTo(unitX * r + cx, unitY * r + cy);
    context.beginPath();
    context.arc(cx, cy, r, startAngle, endAngle, !clockwise);
  }
}
