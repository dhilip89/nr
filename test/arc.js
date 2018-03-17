import Arc from '../src/graphic/shape/arc';
import NRenderer from '../src/nrenderer';
import Nfs from '../src/io/nfs';

export default function () {
    let nr = new NRenderer({
        width: 300,
        height: 300
    });
    nr.init();

    let arc = new Arc({
        shape: {
            cx: 100,
            cy:100,
            r:30,
            startAngle: 0,
            endAngle: Math.PI / 2
        },
        style: {
            strokeStyle: 'red',
            lineWidth: 2,
            fillStyle: 'blue'
        }
    });

    nr.add(arc);

    nr.paint();
    Nfs.saveAsPNG(nr.getCanvas(), './test/arc.png');
}