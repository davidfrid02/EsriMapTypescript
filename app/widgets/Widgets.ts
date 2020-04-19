import EsriMeasurement from "./Measurement/Measurement";
import EsriSketch from "./Sketch/Sketch";

export default class Widgets {
    constructor() {
        new EsriMeasurement();
        new EsriSketch();
    }
}