const selectDistinct = (prevResult, element) => {
  const result = prevResult.slice();

  if(!result.includes(element)) {
    result.push(element);
  }

  return result;
};

const heading = text => `\n${text}\n${"-".repeat(text.length)}\n`;

const findUniqueConstellation = data => {
  console.log(heading("Stargazing Log"));
  console.log(data.flatMap(x => x).reduce(selectDistinct, []));
};

const findUniqueBird = data => {
  console.log(heading("Bird Watching"));
  console.log(data.reduce(selectDistinct, []));
};

const findUniqueStudent = data => {
  console.log(heading("Classroom Attendance Check"));
  console.log(data.flatMap(x => x).reduce(selectDistinct, []));
};

const findUniqueColorsUsed = data => {
  console.log(heading("Art Workshop Color Variety"));
  console.log(data.flatMap(x => x).reduce(selectDistinct, []));
};

const findUniqueLunchboxIngredient = data => {
  console.log(heading("Lunchbox Ingredient Inventory"));
  console.log(data.flatMap(x => x).reduce(selectDistinct, []));
};

const findUniqueParcelSize = data => {
  console.log(heading("Post Office Parcel Size"));
  console.log(data.reduce(selectDistinct, []));
};

const findUniqueChapters = data => {
  console.log(heading("Study Group Completion"));
  console.log(data.flatMap(x => x).reduce(selectDistinct, []));
};

const finduniqueFruitUsed = data => {
  console.log(heading("Fruit Basket Inventory"));
  console.log(data.flatMap(x => x).reduce(selectDistinct, []));
}; 

const findUniqueMovieTitle = data => {
  console.log(heading("Movie Marathon Titles"));
  console.log(data.flatMap(x => x).reduce(selectDistinct, []));
};

const findUniqueAttendees = data => {
  console.log(heading("Name Badge Sorting"));
  console.log(data.reduce(selectDistinct, []));
};

const findUniqueFlowersUsed = data => {
  console.log(heading("Flowers in Bouquets"));
  console.log(data.flatMap(x => x).reduce(selectDistinct, []));
};

const findUniqueStationNames = data => {
  console.log(heading("Train Station Annnouncements"));
  console.log(data.flatMap(x => x).reduce(selectDistinct, []));
};

const findUniqueSnackServed = data => {
  console.log(heading("School Snack List"));
  console.log(data.flatMap(x => x).reduce(selectDistinct, []));
};

const findUniquePhotoThemes = data => {
  console.log(heading("Photo Contest Entries"));
  console.log(data.flatMap(x => x).reduce(selectDistinct, []));
};

const findUniqueOrderIngredient = data => {
  console.log(heading("Cafe Order Ingredients"));
  console.log(data.flatMap(x => x).reduce(selectDistinct, []));
};

const findUniquePoetryWords = data => {
  console.log(heading("Strudent Poetry Words"));
  console.log(data.flatMap(x => x).reduce(selectDistinct, []));
};

const findUniqueGiftItems = data => {
  console.log(heading("Gift Box Items"));
  console.log(data.flatMap(x => x).reduce(selectDistinct, []));
};

const findUniqueParticipant = data => {
  console.log(heading("Workshop Attendance"));
  console.log(data.flatMap(x => x).reduce(selectDistinct, []));
};

const findUniqueStars = data => {
  console.log(heading("Space Camp Star Names"));
  console.log(data.flatMap(x => x).reduce(selectDistinct, []));
};

const findUniqueTeaFlavors = data => {
  console.log(heading("Tea Tasting Flavors"));
  console.log(data.flatMap(x => x).reduce(selectDistinct, []));
};

const main = () => {
  findUniqueConstellation([["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]]);
  findUniqueBird(["sparrow", "crow", "sparrow", "eagle", "crow"]);
  findUniqueStudent([["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]]);
  findUniqueColorsUsed([["blue", "yellow"], ["yellow", "green"], ["blue"]]);
  findUniqueLunchboxIngredient([["rice", "lentils"], ["rice"], ["curd", "lentils"]]);
  findUniqueParcelSize(["small", "large", "medium", "small"]);
  findUniqueChapters([[1, 2], [3], [2, 4, 1]]);
  finduniqueFruitUsed([["apple", "banana"], ["apple"], ["apple", "orange"]]);
  findUniqueMovieTitle([["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]]);
  findUniqueAttendees(["A", "B", "A", "C", "B"]);
  findUniqueFlowersUsed([["rose", "lily"], ["lily", "tulip"]]);
  findUniqueStationNames([["A", "B"], ["B", "C"], ["A"]]);
  findUniqueSnackServed([["idli", "vada"], ["vada", "upma"]]);
  findUniquePhotoThemes([["sunset", "bird"], ["river"], ["sunset"]]);
  findUniqueOrderIngredient([["cheese", "bread"], ["tomato"], ["bread"]]);
  findUniquePoetryWords(["sky", "blue"], ["night"], ["sky", "dark"]);
  findUniqueGiftItems([["toy", "sticker"], ["candy", "sticker"]]);
  findUniqueParticipant([["Tom", "Jerry"], ["Jerry", "Spike"]]);
  findUniqueStars([["Vega", "Sirius"], ["Vega", "Rigel"]]);
  findUniqueTeaFlavors(["mint", "ginger"], ["lemon"], ["mint"]);
};

main();