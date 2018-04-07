import Shape from "../shape";

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * Ring.
 */
export default class Ring extends Shape {
  constructor(opts) {
    super(...arguments);
    this.type = "Ring";
    this.shape = opts.shape;
  }

  buildPath(context) {
    super.buildPath(context);

    let PI2 = Math.PI * 2;
    let { cx, cy, r0, r1 } = this.shape;

    context.moveTo(cx + r0, cy);
    context.arc(cx, cy, r0, 0, PI2, false);
    context.moveTo(cx + r1, cy);
    context.arc(cx, cy, r1, 0, PI2, true);
  }
}
