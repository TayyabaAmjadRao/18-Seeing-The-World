"use strict";
let placeToVisite = ["Saudia", "Pakistan", "Farance", "Japan", "USA"];
console.log("Orignal order:", [...placeToVisite].sort());
console.log("Alphabatic order:", [...placeToVisite].sort());
console.log("Orignal order after sorting:", placeToVisite);
console.log("Reverse alphabatical order:", [...placeToVisite].sort().reverse());
console.log("Orignal order after reverse sorting:", placeToVisite);
console.log("Reverse order:", placeToVisite);
placeToVisite.reverse();
console.log("Back to orignal order:", placeToVisite);
//Sort the array in alphabitacial order
placeToVisite.sort();
console.log("Sorted in alphabitical order:", placeToVisite);
