import NRenderer from '../src/nrenderer';
import Nfs from '../src/io/nfs';

let nr = new NRenderer({
    width: 300,
    height: 300
});

let context = nr.getContext();
context.arc(100, 100, 30, 0, 2*Math.PI);
context.fillStyle='red';
context.fill();
Nfs.saveAsPNG(nr.getCanvas(), './test/test.png');