
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  arr.forEach(function(element) {
       var op = 2 * Math.PI * Math.sqrt(Math.pow((element.avgAlt + earthRadius),3) / GM);
     op = Math.round(op);
     //console.log(op);
     delete element.avgAlt;
     element.orbitalPeriod = op;
  }, this);
  console.log(arr);
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);