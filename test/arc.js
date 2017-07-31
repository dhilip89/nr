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
            endAngle: Math.PI / 4
        },
        style: {
            stroke: 'red',
            lineWidth: 2,
            fill: 'blue'
        }
    });

    nr.add(arc);

    nr.paint();
    Nfs.saveAsPNG(nr.getCanvas(), './test/test.png');
}