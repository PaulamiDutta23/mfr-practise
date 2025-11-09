const addElements = (result, element) => result + element;

const heading = function (text) {
  return `\n${text}\n${"-".repeat(text.length)}\n`;
};

const addCandyJarStock = function () {
  console.log(heading("Candy Jar Stock"));
  console.log([[5, 3], [2], [4, 1]].flat().reduce(addElements, 0));
};

const addMiles = function () {
  console.log(heading("Fitness Tracker Miles"));
  console.log([[2, 3, 2], [4], [1, 1]].flat().reduce(addElements, 0));
};

const addCrateWeight = function () {
  console.log(heading("Vegetable Crate Total"));
  console.log([[4, 6], [2, 3, 1], [5]].flat().reduce(addElements, 0));
};

const addWaterAmount = function () {
  console.log(heading("Garden Watering Amount"));
  console.log([[1, 2, 1], [3], [2]].flat().reduce(addElements, 0));
};

const addCraneNumber = function () {
  console.log(heading("Paper Crane Making"));
  console.log([[3, 2], [1], [4]].flat().reduce(addElements, 0));
};

const addDistributedPenNumber = function () {
  console.log(heading("Classroom Pen Distribution"));
  console.log([[2, 3], [1], [3, 2]].flat().reduce(addElements, 0));
};

const addRepititions = function () {
  console.log(heading("Morning Exercise Count"));
  console.log([[10, 20], [5], [15, 10]].flat().reduce(addElements, 0));
};

const addPages = function () {
  console.log(heading("Book Club Read Pages"));
  console.log([[12, 10], [5], [8, 7]].flat().reduce(addElements, 0));
};

const addStandWeight = function () {
  console.log(heading("Fruit Stand Weight"));
  console.log([[4, 3], [2], [3, 1]].flat().reduce(addElements, 0));
};

const addLaps = function () {
  console.log(heading("Jogging Laps Count"));
  console.log([[2, 3, 2], [1], [4]].flat().reduce(addElements, 0));
};

const main = function () {
  addCandyJarStock();
  addMiles();
  addCrateWeight();
  addWaterAmount();
  addCraneNumber();
  addDistributedPenNumber();
  addRepititions();
  addPages();
  addStandWeight();
  addLaps();
};

main();