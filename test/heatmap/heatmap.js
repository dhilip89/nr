// import Polyline from '../src/graphic/shape/polyline';
import NRenderer from '../../src/nrenderer';
import Nfs from '../../src/io/nfs';
import fs from 'fs';

export default function () {
    let nr = new NRenderer({
        width: 300,
        height: 300
    });
    nr.init();

    let context = nr.getContext();
    let radialGradient = context.createRadialGradient(100, 100, 0, 100, 100, 50);
    radialGradient.addColorStop(0, 'rgba(255, 0, 0, 1)');
    radialGradient.addColorStop(0.25, 'rgba(255, 0, 0, 0.85)');
    radialGradient.addColorStop(0.55, 'rgba(255, 255, 0 ,0.55)');
    radialGradient.addColorStop(0.85, 'rgba(0, 255, 0, 0.25)');
    radialGradient.addColorStop(1, 'rgba(0, 0, 255, 0)');
    context.fillStyle = radialGradient;
    context.arc(100, 100, 50, 0, 2 * Math.PI, true);
    context.fill();

    // nr.getCanvas().pngStream().pipe(fs.createWriteStream('./test/heatmap.png'));

    // nr.paint();
    Nfs.saveAsPNG(nr.getCanvas(), './test/heatmap.png');
}