import Shape from "../shape";

export default class Sector extends Shape {
  constructor(opts) {
    super(...arguments);
  }

  buildPath(context) {
    let { sin, cos, PI } = Math;
    let { cx, cy, startAngle, endAngle, r0, r1, clockWise } = this.init();
    context.moveTo(cx + r0 * cos(startAngle), cy + r0 * sin(startAngle));
    context.arc(cx, cy, r0, startAngle, endAngle, clockWise);
    context.lineTo(cx + r1 * cos(endAngle), cy + r1 * sin(endAngle));
    context.arc(cx, cy, r1, endAngle, startAngle, !clockWise);
    context.closePath();
  }

  init() {
    let { cx, cy, startAngle, endAngle, r0, r1, clockWise } = this.shape;
    r0 = r0 ? r0 : 0;
    r1 = r1 ? r1 : 0;
    clockWise = !clockWise;
    startAngle = startAngle ? startAngle : 0;
    endAngle = endAngle ? endAngle : Math.PI * 2;
    cx = cx ? cx : 150;
    cy = cy ? cy : 150;

    return { cx, cy, startAngle, endAngle, r0, r1, clockWise };
  }
}
