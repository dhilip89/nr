import Polyline from "./polyline";

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Polygon.
 */
export default class Polygon extends Polyline {
  constructor(opts) {
    super(...arguments);
    this.type = "Polygon";
  }

  buildPath(context) {
     super.buildPath(context);
     context.closePath();
  }
}
