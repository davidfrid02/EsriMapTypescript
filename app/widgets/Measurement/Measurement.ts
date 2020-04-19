import AreaMeasurement2D from "esri/widgets/AreaMeasurement2D";
import Expand from "esri/widgets/Expand";

export default class EsriMeasurement {
  constructor() {
    const areaMeasurement2D = new AreaMeasurement2D({
      view: window.Wonderland.view,
    });

    const expand = new Expand({
      expandIconClass: "esri-icon-measure-line",
      view: window.Wonderland.view,
      content: areaMeasurement2D,
    });
    window.Wonderland.view.ui.add(expand, "top-left");
  }
}
