import Circle from '../src/graphic/shape/circle';
import NRenderer from '../src/nrenderer';
import Nfs from '../src/io/nfs';

export default function () {
    let nr = new NRenderer({
        width: 300,
        height: 300
    });
    nr.init();

    let c = new Circle({
        shape: {
            cx: 100,
            cy:85,
            r: 20
        },
        style: {
            fillStyle: 'blue',
            strokeStyle: 'orange',
            lineWidth: 3
        }
    });

    nr.add(c);

    c = new Circle({
        shape: {
            cx: 120,
            cy: 120,
            r: 20
        },
        style: {
            fillStyle: 'red',
            strokeStyle: 'orange',
            lineWidth: 3
        }
    });

    nr.add(c);

    c = new Circle({
        shape: {
            cx: 80,
            cy: 120,
            r: 20
        },
        style: {
            fillStyle: 'green',
            strokeStyle: 'orange',
            lineWidth: 3
        }
    });

    nr.add(c);
    nr.paint();

    Nfs.saveAsPNG(nr.getCanvas(), './test/test.png');
}