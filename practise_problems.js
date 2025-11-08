const blueCount = (prevCount, element) => {
  const count = element === "blue" ? prevCount + 1 : prevCount;
  return count;
};

const selectDistinct = (result, element) => {
  if (!result.includes(element)) {
    result.push(element);
  }
  return result;
};

const addElements = (result, element) => result + element;

const doesDoExist = element => element.includes("do");

const doAllLesser32 = element => element.every(x => x < 32);

const countDune = (prevCount, element) => {
  const count = element === "Dune" ? prevCount + 1 : prevCount;
  return count;
};

const doesSoExist = element => element.includes("so");

const heading = function (text) {
  return `\n${text}\n${"-".repeat(text.length)}\n`;
};

const festivalRibbonCount = function () {
  console.log(heading("Festival Ribbon Count"));
  console.log(["red", "blue", "red", "green", "red", "blue"].reduce(blueCount, 0));
  console.log(["red", "blue", "red", "blue", "red", "blue"].reduce(blueCount, 0));
};

const stargazingLog = function () {
  console.log(heading("Stargazing Log"));
  console.log([["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]].flatMap(x => x).reduce(selectDistinct, []));
};

const birdWatch = function () {
  console.log(heading("Bird Watching"));
  console.log(["sparrow", "crow", "sparrow", "eagle", "crow"].reduce(selectDistinct, []));
};

const attendanceCheck = function () {
  console.log(heading("Classroom Attendance Check"));
  console.log([["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]].flatMap(x => x).reduce(selectDistinct, []));
};

const countCandyJarStock = function () {
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

const countMiles = function () {
  console.log(heading("Fitness Tracker Miles"));
  console.log([[2, 3, 2], [4], [1, 1]].flatMap(x => x).reduce(addElements, 0));
};

const findUniqueColorsUsed = function () {
  console.log(heading("Art Workshop Color Variety"));
  console.log([["blue", "yellow"], ["yellow", "green"], ["blue"]].flatMap(x => x).reduce(selectDistinct, []));
};

const countReturnedBook = function () {
  console.log(heading("Library Return Counter"));
  console.log(["Dune", "Dune", "Foundation", "Dune"].reduce(countDune, 0));
};

const lunchboxIngredient = function () {
  console.log(heading("Lunchbox Ingredient Inventory"));
  console.log([["rice", "lentils"], ["rice"], ["curd", "lentils"]].flatMap(x => x).reduce(selectDistinct, [])); 
};

const doesContainMusicSequence = function () {
  console.log(heading("Choir Harmony Review"));
  console.log([["la", "la"], ["mi"], ["so", "la"]].some(doesSoExist));
};

const main = function () {
  festivalRibbonCount();
  stargazingLog();
  birdWatch();
  attendanceCheck();
  countCandyJarStock();
  doesContainMusicalNote();
  doAllTemperatureSheetContainLesser32();
  countMiles();
  findUniqueColorsUsed();
  countReturnedBook();
  lunchboxIngredient();
  doesContainMusicSequence();
};

main();