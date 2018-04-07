import Ring from "../../src/graphic/shape/ring";
import NRenderer from "../../src/nrenderer";
import Nfs from "../../src/io/nfs";

export default function() {
  let nr = new NRenderer({
    width: 300,
    height: 300
  });
  nr.init();

  let ring = new Ring({
    shape: {
      cx: 100,
      cy: 100,
      r0: 20,
      r1: 30
    },
    style: {
      strokeStyle: "red",
      lineWidth: 2,
      // fillStyle: 'blue'
    }
  });

  nr.add(ring);

  nr.paint();
  Nfs.saveAsPNG(nr.getCanvas(), "./test/ring/ring.png");
}
