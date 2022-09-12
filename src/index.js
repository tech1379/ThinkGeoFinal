import "./styles.css";
import * as wkt from "wkt";
import * as measure from "./measure";
import * as utils from "./utils";

// tabs
const distanceBetweenPointsTab = document.getElementById(
  "distanceBetweenPointsTab"
);
const lengthOfLineTab = document.getElementById("lengthOfLineTab");
const perimeterOfPolygonTab = document.getElementById("perimeterOfPolygonTab");
const areaOfPolygonTab = document.getElementById("areaOfPolygonTab");

// input fields
const startPointInput = document.getElementById("startPointInput");
const endPointInput = document.getElementById("endPointInput");
const lineInput = document.getElementById("lineInput");
const polygonInput = document.getElementById("polygonInput");
const areaInput = document.getElementById("areaInput");

// buttons
const calculateDistanceButton = document.getElementById(
  "calculateDistanceButton"
);
const calculateLengthButton = document.getElementById("calculateLengthButton");
const calculatePerimeterButton = document.getElementById(
  "calculatePerimeterButton"
);
const calculateAreaButton = document.getElementById("calculateAreaButton");
// result fields
const distanceResult = document.getElementById("distanceResult");
const lengthResult = document.getElementById("lengthResult");
const perimeterResult = document.getElementById("perimeterResult");
const areaResult = document.getElementById("areaResult");

distanceBetweenPointsTab.addEventListener("click", () => {
  utils.switchTab(distanceBetweenPointsTab, "distanceBetweenPointsContent");
});

lengthOfLineTab.addEventListener("click", () => {
  utils.switchTab(lengthOfLineTab, "lengthOfLineContent");
});

perimeterOfPolygonTab.addEventListener("click", () => {
  utils.switchTab(perimeterOfPolygonTab, "perimeterOfPolygonContent");
});

areaOfPolygonTab.addEventListener("click", () => {
  utils.switchTab(areaOfPolygonTab, "areaOfPolygonContent");
});

calculateDistanceButton.addEventListener("click", () => {
  let startPoint = wkt.parse(startPointInput.value);
  let endPoint = wkt.parse(endPointInput.value);
  distanceResult.value = measure.GetDistanceBetweenPoints(
    startPoint.coordinates,
    endPoint.coordinates
  );
});

calculateLengthButton.addEventListener("click", () => {
  let line = wkt.parse(lineInput.value);
  lengthResult.value = measure.GetLineLength(line);
});

calculatePerimeterButton.addEventListener("click", () => {
  let polygon = wkt.parse(polygonInput.value);
  perimeterResult.value = measure.GetPerimeter(polygon);
});
calculateAreaButton.addEventListener("click", () => {
  let polygon = wkt.parse(areaInput.value);
  areaResult.value = measure.GetArea(polygon);
});
