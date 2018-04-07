import Polygon from '../../src/graphic/shape/polygon';
import NRenderer from '../../src/nrenderer';
import Nfs from '../../src/io/nfs';

export default function () {
    let nr = new NRenderer({
        width: 300,
        height: 300
    });
    nr.init();

    let polygon = new Polygon({
        shape: {
            points: [
                [10, 10],
                [100, 100],
                [100, 30],
                [120, 90],
                [200,250]
            ]
        },
        style: {
            strokeStyle: 'red',
            lineWidth: 3
        }
    });

    nr.add(polygon);
    nr.paint();
    Nfs.saveAsPNG(nr.getCanvas(), './test/polygon/polygon.png');
}