import Shape from "../shape";

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Polyline.
 */
export default class Polyline extends Shape {
  constructor(opts) {
    super(...arguments);
    this.type = "Polyline";
    this.shape = opts.shape;
  }

  buildPath(context) {
    super.buildPath(context);

    const points = this.shape["points"] || [];

    context.beginPath();
    context.moveTo(points[0][0], points[0][1]);

    for (let i = 0; i < points.length; i++) {
      context.lineTo(points[i][0], points[i][1]);
    }
  }
}
