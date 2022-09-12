export function GetDistanceBetweenPoints(startPoint, endPoint) {
  let xDistance = startPoint[0] - endPoint[0];
  let yDistance = startPoint[1] - endPoint[1];
  return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
}

export function GetLineLength(line) {
  console.log(line);
  if (line == null) {
    console.log("line is null");
    return 0;
  }

  var totalLength = 0;

  if (line.type !== "LineString") {
    return "you have given a point";
  }
  if (line.coordinates.length === 1) {
    return "line only has 1 point";
  }
  for (var i = 0; i < line.coordinates.length - 1; i++) {
    totalLength += GetDistanceBetweenPoints(
      line.coordinates[i],
      line.coordinates[i + 1]
    );
  }
  return totalLength;
}

export function GetPerimeter(polygon) {
  console.log(polygon);

  if (polygon == null) {
    return 0;
  }
  if (polygon.type !== "Polygon") {
    return "Not a polygon";
  }
  //calculates the perimter by taking the points and finding the distance between each vertice and adding
  var totalPerimeter = 0;
  for (var i = 0; i < polygon.coordinates[0].length - 1; i++) {
    totalPerimeter += GetDistanceBetweenPoints(
      polygon.coordinates[0][i],
      polygon.coordinates[0][i + 1]
    );
  }

  return totalPerimeter;
}
export function GetArea(polygon) {
  if (polygon == null) {
    return 0;
  }
  if (polygon.type !== "Polygon") {
    return "Not a polygon";
  }
  if (polygon.coordinates[0].length <= 2) {
    return "polygon does not have enough points.";
  }
  //check if values are negative and return input error
  for (var i = 0; i < polygon.coordinates[0].length - 1; i++) {
    if (polygon.coordinates[0][i][0] < 0) {
      return "cannot input negative values";
    }
    if (polygon.coordinates[0][i][1] < 0) {
      return "cannot input negative values";
    }
  }
  //algorithm is gauss's area formula (shoelace formula)
  //only tested on the default input and ((0 0, 10 0, 10 10, 0 10, 0 0))
  //multiplies the first x coordinate by the second y coordinate and iterates so forth
  //multiplies the first y coordinate by the second x coordinate and iterates so forth
  //then the sum is taken and divided by two
  let area = 0;
  let sumX = 0;
  let sumY = 0;
  for (let i = 0; i < polygon.coordinates[0].length - 1; i++) {
    sumX += polygon.coordinates[0][i][0] * polygon.coordinates[0][i + 1][1];
    sumY += polygon.coordinates[0][i][1] * polygon.coordinates[0][i + 1][0];
  }
  area = (sumX + sumY) / 2;
  return Math.abs(area);
}
