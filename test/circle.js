import Circle from '../src/graphic/shape/circle';
import Rect from '../src/graphic/shape/rect';
import Line from '../src/graphic/shape/line';
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
            cy: 85,
            r: 20
        },
        style: {
            fillStyle: 'blue',
            strokeStyle: 'red',
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
            strokeStyle: 'green',
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
            strokeStyle: 'blue',
            lineWidth: 3
        }
    });

    nr.add(c);

    // let rect = new Rect({
    //     shape: {
    //         x: 100,
    //         y: 100,
    //         width: 100,
    //         height: 100
    //     },
    //     style: {
    //         fillStyle: 'red',
    //         // strokeStyle: 'rgba()'
    //     }
    // });
    // nr.add(rect);

    // let line = new Line({
    //     shape: {
    //         x1: 10,
    //         y1: 10,
    //         x2: 120,
    //         y2: 50
    //     },
    //     style: {
    //         strokeStyle: 'yellow',
    //         lineWidth: 2
    //     }
    // });
    // nr.add(line);

    nr.paint();
    Nfs.saveAsPNG(nr.getCanvas(), './test/circle.png');
}