//calculate the windchill
var t = 49;
var s = Math.pow(10, .16);
var f = 35.74 + 0.6215 * t - 35.75 * s + 0.4275 * t * s;
document.getElementById('windoutput').innerHTML = f.toFixed(2) + "&deg F";