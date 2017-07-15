// import hello from './test';
// import BenchMark from 'benchmark';

// export default function test() {
//     let suite = BenchMark.Suite;
//     suite.add('suite =======>>>', function () {
//         test();
//     }).on('cycle', function (event) {
//         console.log(String(event.target));
//     }).on('complete', function () {
//         console.log('Fastest is ' + this.filter('fastest').map('name'));
//     }).run({ 'async': true });
// };

import BenchMark from 'benchmark';
import Circle from '../src/graphic/shape/circle';
import NRenderer from '../src/nrenderer';
import Nfs from '../src/io/nfs';

function circle() {
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

    // Nfs.saveAsPNG(nr.getCanvas(), './test/test.png');
}

export default function test() {
    let suite = new BenchMark.Suite;
    suite.add('suite', function () {
        circle();
    }).on('cycle', function (event) {
        console.log(String(event.target));
    }).on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    }).run({ 'async': true });
};