import Sketch from "esri/widgets/Sketch";
import Expand from "esri/widgets/Expand";
import GraphicsLayer from "esri/layers/GraphicsLayer";


export default class EsriSketch {
  constructor() {
    const layer = new GraphicsLayer();
    const sketch = new Sketch({
      layer: layer,
      view: window.Wonderland.view,
    });
    const expand = new Expand({
      expandIconClass: "esri-icon-edit",
      view: window.Wonderland.view,
      content: sketch,
    });
    window.Wonderland.view.map.layers.add(layer);
    window.Wonderland.view.ui.add(expand, "top-left");
  }
}
