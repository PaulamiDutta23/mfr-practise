const selectDistinct = (result, element) => {
  if (!result.includes(element)) {
    result.push(element);
  }
  return result;
};

const addElements = (result, element) => result + element;

const doesDoExist = element => element.includes("do");

const doAllLesser32 = element => element.every(x => x < 32);

const doesSoExist = element => element.includes("so");

const heading = function (text) {
  return `\n${text}\n${"-".repeat(text.length)}\n`;
};

const findUniqueConstellation = function () {
  console.log(heading("Stargazing Log"));
  console.log([["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]].flatMap(x => x).reduce(selectDistinct, []));
};

const findUniqueBird = function () {
  console.log(heading("Bird Watching"));
  console.log(["sparrow", "crow", "sparrow", "eagle", "crow"].reduce(selectDistinct, []));
};

const findUniqueStudent = function () {
  console.log(heading("Classroom Attendance Check"));
  console.log([["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]].flatMap(x => x).reduce(selectDistinct, []));
};

const addCandyJarStock = function () {
  console.log(heading("Candy Jar Stock"));
  console.log([[5, 3], [2], [4, 1]].flatMap(x => x).reduce(addElements, 0));
};

const doesContainMusicalNote = function () {
  console.log(heading("Music Reharshal Note"));
  console.log([["mi", "fa", "so"], ["do", "mi"], ["fa"]].some(doesDoExist));
}; 

const doAllTemperatureSheetContainLesser32 = function () {
  console.log(heading("Weather Sensor Validation"));
  console.log([[22, 23], [25, 24, 22], [29]].every(doAllLesser32));
};

const addMiles = function () {
  console.log(heading("Fitness Tracker Miles"));
  console.log([[2, 3, 2], [4], [1, 1]].flatMap(x => x).reduce(addElements, 0));
};

const findUniqueColorsUsed = function () {
  console.log(heading("Art Workshop Color Variety"));
  console.log([["blue", "yellow"], ["yellow", "green"], ["blue"]].flatMap(x => x).reduce(selectDistinct, []));
};

const findUniqueLunchboxIngredient = function () {
  console.log(heading("Lunchbox Ingredient Inventory"));
  console.log([["rice", "lentils"], ["rice"], ["curd", "lentils"]].flatMap(x => x).reduce(selectDistinct, [])); 
};

const doesContainMusicSequence = function () {
  console.log(heading("Choir Harmony Review"));
  console.log([["la", "la"], ["mi"], ["so", "la"]].some(doesSoExist));
};

const addCrateWeight = function () {
  console.log(heading("Vegetable Crate Total"));
  console.log([[4, 6], [2, 3, 1], [5]].flatMap(x => x).reduce(addElements, 0));
};

const findUniqueParcelSize = function () {
  console.log(heading("Post Office Parcel Size"));
  console.log(["small", "large", "medium", "small"].reduce(selectDistinct, []));
};

const main = function () {
  findUniqueConstellation();
  findUniqueBird();
  findUniqueStudent();
  addCandyJarStock();
  doesContainMusicalNote();
  doAllTemperatureSheetContainLesser32();
  addMiles();
  findUniqueColorsUsed();
  findUniqueLunchboxIngredient();
  doesContainMusicSequence();
  addCrateWeight();
  findUniqueParcelSize();
};

main();