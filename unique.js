const selectDistinct = (result, element) => {
  if (!result.includes(element)) {
    result.push(element);
  }
  return result;
};

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

const findUniqueColorsUsed = function () {
  console.log(heading("Art Workshop Color Variety"));
  console.log([["blue", "yellow"], ["yellow", "green"], ["blue"]].flatMap(x => x).reduce(selectDistinct, []));
};

const findUniqueLunchboxIngredient = function () {
  console.log(heading("Lunchbox Ingredient Inventory"));
  console.log([["rice", "lentils"], ["rice"], ["curd", "lentils"]].flatMap(x => x).reduce(selectDistinct, []));
};

const findUniqueParcelSize = function () {
  console.log(heading("Post Office Parcel Size"));
  console.log(["small", "large", "medium", "small"].reduce(selectDistinct, []));
};

const findUniqueChapters = function () {
  console.log(heading("Study Group Completion"));
  console.log([[1, 2], [3], [2, 4, 1]].flatMap(x => x).reduce(selectDistinct, []));
};

const finduniqueFruitUsed = function () {
  console.log(heading("Fruit Basket Inventory"));
  console.log([["apple", "banana"], ["apple"], ["apple", "orange"]].flatMap(x => x).reduce(selectDistinct, []));
}; 

const main = function () {
  findUniqueConstellation();
  findUniqueBird();
  findUniqueStudent();
  findUniqueColorsUsed();
  findUniqueLunchboxIngredient();
  findUniqueParcelSize();
  findUniqueChapters();
  finduniqueFruitUsed();
};

main();