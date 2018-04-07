import Shape from "../shape";

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * 贝塞尔曲线.
 */
export default class BezierCurve extends Shape {
  constructor(opts) {
    super(...arguments);
    this.type = "BezierCurve";
    this.shape = opts.shape;
  }

  buildPath(context) {
    super.buildPath(context);

    let { x1, y1, cpx1, cpy1, cpx2, cpy2, x2, y2 } = this.shape;
    context.beginPath();
    context.moveTo(x1, y1);

    if (cpx2 && cpy2) {
      // 三次贝塞尔.
      context.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, x2, y2);
      return;
    }

    context.quadraticCurveTo(cpx1, cpy1, x2, y2);
  }
}
