import Circle from '../src/graphic/shape/circle';
import NRenderer from '../src/nrenderer';
import Nfs from '../src/io/nfs';

let nr = new NRenderer({
    width: 300,
    height: 300
});
nr.init();

let c = new Circle({
    shape: {
        cx: 100,
        cy: 100,
        r: 20
    },
    style: {
        fillStyle: 'blue',
        strokeStyle: 'orange',
        lineWidth: 3
    }
});

nr.add(c);
nr.paint();

Nfs.saveAsPNG(nr.getCanvas(), './test/test.png');