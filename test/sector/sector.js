import Sector from "../../src/graphic/shape/sector";
import NRenderer from "../../src/nrenderer";
import Nfs from "../../src/io/nfs";

export default function() {
  let nr = new NRenderer({
    width: 300,
    height: 300
  });
  nr.init();

  let sector = new Sector({
    shape: {
      startAngle: -Math.PI / 4,
      endAngle: Math.PI / 4,
      r0: 50,
      r1: 100,
      clockWise: true
    },
    style: {
      strokeStyle: "red",
      lineWidth: 2,
      fillStyle: 'blue'
    }
  });

  nr.add(sector);

  nr.paint();
  Nfs.saveAsPNG(nr.getCanvas(), "./test/sector/sector.png");
}
