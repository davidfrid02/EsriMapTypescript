import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import Widgets from "./widgets/Widgets";
declare global {
    interface Window { Wonderland: { view: any} }
}

const map = new EsriMap({
  basemap: "streets",
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-118.244, 34.052],
  zoom: 12,
});

window.Wonderland ={
    view: view
}

new Widgets();


