import Storage from './storage';
import Painter from './painter';

import Canvas from 'canvas/lib/canvas';

/**
 * @author yuanzhaokang <kangzhaoyuan@gmail.com>
 * NodeJS graphic render.
 */
export default class NRenderer {
    constructor(opts) {
        this.width = opts['width'] || 300;
        this.height = opts['height'] || 150;

        this.canvas = null;
        this.context = null;
        this.shapes = [];

        this.storage = new Storage();
        this.painter = new Painter(this.context);
    }

    /**
     * Init canvas and graphic context.
     */
    init() {
        this.canvas = new Canvas(this.width, this.height);
        this.context = this.canvas.getContext('2d');
    }

    /**
     * Get canvas 2d context.
     */
    getContext() {
        return this.context;
    }

    /**
     * Get canvas. for example, if you want to write it to file, you can use it to get canvas.
     */
    getCanvas() {
        return this.canvas;
    }

    /**
     * Get canvas width.
     */
    getWidth() {
        return this.width;
    }

    /**
     * Get canvas height;
     */
    getHeight() {
        return this.height;
    }

    /**
     * Set canvas width.
     * @param {Number} width 
     */
    setWidth(width) {
        this.width = width;
    }

    /**
     * Set canvas height.
     * @param {Number} height 
     */
    setHeight(height) {
        this.height = height;
    }

    /**
     * Add shape to nrenderer to render them.
     * @param {Shape} shape 
     */
    add(shape) {
        this.storage.add(shape);
    }

    /**
     * Remove shape from nrenderer.
     * @param {Shape} shape 
     */
    remove(shape) {
        this.storage.remove(shape);
    }

    /**
     * Repaint the canvas.
     */
    repaint() {

    }
}