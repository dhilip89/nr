import BezierCurve from "../../src/graphic/shape/bezierCurve";
import NRenderer from "../../src/nrenderer";
import Nfs from "../../src/io/nfs";

export default function() {
  let nr = new NRenderer({
    width: 300,
    height: 300
  });
  nr.init();

  let bezierCurve = new BezierCurve({
    shape: {
      x1: 10,
      y1: 10,
      cpx1: 50,
      cpy1: 120,
      cpx2: 80,
      cpy2: 3,
      x2: 130,
      y2: 10
    },
    style: {
      strokeStyle: "red",
      lineWidth: 2
      // fillStyle: 'blue'
    }
  });

  nr.add(bezierCurve);

  nr.paint();
  Nfs.saveAsPNG(nr.getCanvas(), "./test/bezierCurve/bezierCurve.png");
}
