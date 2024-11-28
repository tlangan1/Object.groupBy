import { display } from "./displayAnObject.js";

var aArray = [
  { animal: `cat`, type: `mammal`, size: `small` },
  { animal: `dog`, type: `mammal`, size: `medium` },
  { animal: `tuna`, type: `fish`, size: `large` },
];

// @ts-ignore
var types = Object.groupBy(aArray, groupBy("type"));

// displayGroupings(types);
display(types);

console.log(`******************************************`);
console.log(`Regrouping by size`);
console.log(`******************************************`);
// @ts-ignore
var sizes = Object.groupBy(aArray, groupBy("size"));

displayGroupings(sizes);

/****************************/
/****************************/
/* *** Helper Functions *** */
/****************************/
/****************************/
function groupBy(property) {
  return groupByCallback;

  function groupByCallback(key) {
    return key[property];
  }
}

function displayGroupings(groupedObject) {
  for (let key in groupedObject) {
    console.log(`key is ${key}`);
    groupedObject[key].forEach((item) => {
      console.log(`\tanimal is ${item.animal}`);
    });
  }
}
