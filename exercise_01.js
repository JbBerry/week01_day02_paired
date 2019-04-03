
// Exercise 1

var stops = [ "Croy", "Cumbernauld", "Falkirk High", "Linlithgow", "Livingston", "Haymarket" ];
// console.log(stops);

// Complete these tasks:

// 1. Add `"Edinburgh Waverley"` to the end of the array
stops.push ("Edinburgh Waverley");
// console.log(stops);

// 2. Add `"Glasgow Queen St"` to the start of the array
stops.unshift ("Glasgow Queen St");
// console.log(stops);

// 3. Add `"Polmont"` at the appropriate point (between `"Falkirk High"` and `"Linlithgow"`)
stops.splice(4, 0, "Polmont") // 5th position as we have already made "Glasgow Queen St" the 1st position
// console.log(stops);

// 4. Work out the index position of `"Linlithgow"`
var station = "Linlithgow";
for (var i = 0; i < stops.length; i++) {
  if (stops[i] === station) {
    console.log(station + " is station number " + (i+1) + " in the array");
  }
}
// 5. Delete `"Cumbernauld"` from the array by index
var station = "Cumbernauld";
for (var i = 0; i < stops.length; i++) {
  if (stops[i] === station) {
    stops.splice(i,1);
  }
}
//console.log(stops);

// 6. How many stops there are in the array?
console.log(stops.length);

// 7. How many ways can we return `"Falkirk High"` from the array?
console.log(stops[2]); // "Glasgow Queen St" added to beggining, "Cumbernauld" has been removed

// 8. Reverse the positions of the stops in the array
var reverseStops = [];
for (var i = 0; i < stops.length; i++) {
  reverseStops.unshift (stops[i]);
  }
// console.log(stops);
// console.log(reverseStops);

// 9. Log out all the stops using a for loop
for (var stop of stops){
  console.log(`${stop}`);
}
