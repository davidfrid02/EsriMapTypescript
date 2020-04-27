// <reference path="../../typings/index.d.ts"
describe("TestEsriMap", () => {
  require([
    "esri/views/MapView",
    "../app/widgets/Measurement/Measurement.js",
    "../app/widgets/Sketch/Sketch.js",
  ], (MapView, Measurement, Sketch) => {


    const view = new MapView({
      map: {},
      container: "viewDiv",
      center: [-118.244, 34.052],
      zoom: 12,
    });

    window.Wonderland = {
      view: view,
    };

    it("TestMeasurement", () => {
      const measurement = new Measurement.default.prototype.constructor();
      expect(true).toBeTruthy("What? was true not truth");
      expect(Measurement.default.prototype.plus(4,6)).toEqual(10);
      expect(Measurement.default.prototype.plus(-4,8)).toEqual(4);
      expect(Measurement.default.prototype.plus(5,7)).toBeLessThan(15);
    });

    it("TestSketch", () => {
        Sketch.default();
        expect(true).toBeTruthy("What? was true not truth");
        expect(false).toBeFalse();
      });
  });
});
