const isDistinct = (element, index, list) => index === list.indexOf(element);

const heading = function (text) {
  return `\n${text}\n${"-".repeat(text.length)}\n`;
};

const findUniqueConstellation = function () {
  console.log(heading("Stargazing Log"));
  console.log([["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]].flat().filter(isDistinct));
};

const findUniqueBird = function () {
  console.log(heading("Bird Watching"));
  console.log(["sparrow", "crow", "sparrow", "eagle", "crow"].filter(isDistinct));
};

const findUniqueStudent = function () {
  console.log(heading("Classroom Attendance Check"));
  console.log([["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]].flat().filter(isDistinct));
};

const findUniqueColorsUsed = function () {
  console.log(heading("Art Workshop Color Variety"));
  console.log([["blue", "yellow"], ["yellow", "green"], ["blue"]].flat().filter(isDistinct));
};

const findUniqueLunchboxIngredient = function () {
  console.log(heading("Lunchbox Ingredient Inventory"));
  console.log([["rice", "lentils"], ["rice"], ["curd", "lentils"]].flat().filter(isDistinct));
};

const findUniqueParcelSize = function () {
  console.log(heading("Post Office Parcel Size"));
  console.log(["small", "large", "medium", "small"].filter(isDistinct));
};

const findUniqueChapters = function () {
  console.log(heading("Study Group Completion"));
  console.log([[1, 2], [3], [2, 4, 1]].flatMap(x => x).filter(isDistinct));
};

const finduniqueFruitUsed = function () {
  console.log(heading("Fruit Basket Inventory"));
  console.log([["apple", "banana"], ["apple"], ["apple", "orange"]].flat().filter(isDistinct));
}; 

const findUniqueMovieTitle = function () {
  console.log(heading("Movie Marathon Titles"));
  console.log([["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]].flat().filter(isDistinct));
};

const findUniqueAttendees = function () {
  console.log(heading("Name Badge Sorting"));
  console.log(["A", "B", "A", "C", "B"].filter(isDistinct));
};

const findUniqueFlowersUsed = function () {
  console.log(heading("Flowers in Bouquets"));
  console.log([["rose", "lily"], ["lily", "tulip"]].flat().filter(isDistinct));
};

const findUniqueStationNames = function () {
  console.log(heading("Train Station Annnouncements"));
  console.log([["A", "B"], ["B", "C"], ["A"]].flat().filter(isDistinct));
};

const findUniqueSnackServed = function () {
  console.log(heading("School Snack List"));
  console.log([["idli", "vada"], ["vada", "upma"]].flat().filter(isDistinct));
};

const findUniquePhotoThemes = function () {
  console.log(heading("Photo Contest Entries"));
  console.log([["sunset", "bird"], ["river"], ["sunset"]].flat().filter(isDistinct));
};

const findUniqueOrderIngredient = function () {
  console.log(heading("Cafe Order Ingredients"));
  console.log([["cheese", "bread"], ["tomato"], ["bread"]].flat().filter(isDistinct));
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
  findUniqueMovieTitle();
  findUniqueAttendees();
  findUniqueFlowersUsed();
  findUniqueStationNames();
  findUniqueSnackServed();
  findUniquePhotoThemes();
  findUniqueOrderIngredient();
};

main();