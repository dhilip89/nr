import Shape from "../shape";

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Circle shape.
 */
export default class Circle extends Shape {
  constructor(opts) {
    super(...arguments);
    this.type = "Circle";
    this.cx = opts.shape.cx || 150;
    this.cy = opts.shape.cy || 75;
    this.r = opts.shape.r || 5;
  }

  buildPath(context) {
    super.buildPath();

    let { cx, cy, r } = this;
    context.beginPath();
    context.arc(cx, cy, r, 0, 2 * Math.PI, true);
    context.closePath();
  }
}
