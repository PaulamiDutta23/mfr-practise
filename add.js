const addElements = (result, element) => result + element;

const heading = function (text) {
  return `\n${text}\n${"-".repeat(text.length)}\n`;
};

const addCandyJarStock = function () {
  console.log(heading("Candy Jar Stock"));
  console.log([[5, 3], [2], [4, 1]].flatMap(x => x).reduce(addElements, 0));
};

const addMiles = function () {
  console.log(heading("Fitness Tracker Miles"));
  console.log([[2, 3, 2], [4], [1, 1]].flatMap(x => x).reduce(addElements, 0));
};

const addCrateWeight = function () {
  console.log(heading("Vegetable Crate Total"));
  console.log([[4, 6], [2, 3, 1], [5]].flatMap(x => x).reduce(addElements, 0));
};

const main = function () {
  addCandyJarStock();
  addMiles();
  addCrateWeight();
};

main();