const heading = text => `\n${text}\n${"-".repeat(text.length)}\n`;

const selectDistinct = (prevResult, element) => {
  const result = prevResult.slice();

  if(!result.includes(element)) {
    result.push(element);
  }

  return result;
};

const uniqueOf = data => data.flatMap(x => x).reduce(selectDistinct, []);

const findUniqueConstellation = data => {
  console.log(heading("Stargazing Log"));
  console.log(uniqueOf(data));
};

const findUniqueBird = data => {
  console.log(heading("Bird Watching"));
  console.log(uniqueOf(data));
};

const findUniqueStudent = data => {
  console.log(heading("Classroom Attendance Check"));
  console.log(uniqueOf(data));
};

const findUniqueColorsUsed = data => {
  console.log(heading("Art Workshop Color Variety"));
  console.log(uniqueOf(data));
};

const findUniqueLunchboxIngredient = data => {
  console.log(heading("Lunchbox Ingredient Inventory"));
  console.log(uniqueOf(data));
};

const findUniqueParcelSize = data => {
  console.log(heading("Post Office Parcel Size"));
  console.log(uniqueOf(data));
};

const findUniqueChapters = data => {
  console.log(heading("Study Group Completion"));
  console.log(uniqueOf(data));
};

const finduniqueFruitUsed = data => {
  console.log(heading("Fruit Basket Inventory"));
  console.log(uniqueOf(data));
}; 

const findUniqueMovieTitle = data => {
  console.log(heading("Movie Marathon Titles"));
  console.log(uniqueOf(data));
};

const findUniqueAttendees = data => {
  console.log(heading("Name Badge Sorting"));
  console.log(uniqueOf(data));
};

const findUniqueFlowersUsed = data => {
  console.log(heading("Flowers in Bouquets"));
  console.log(uniqueOf(data));
};

const findUniqueStationNames = data => {
  console.log(heading("Train Station Annnouncements"));
  console.log(uniqueOf(data));
};

const findUniqueSnackServed = data => {
  console.log(heading("School Snack List"));
  console.log(uniqueOf(data));
};

const findUniquePhotoThemes = data => {
  console.log(heading("Photo Contest Entries"));
  console.log(uniqueOf(data));
};

const findUniqueOrderIngredient = data => {
  console.log(heading("Cafe Order Ingredients"));
  console.log(uniqueOf(data));
};

const findUniquePoetryWords = data => {
  console.log(heading("Strudent Poetry Words"));
  console.log(uniqueOf(data));
};

const findUniqueGiftItems = data => {
  console.log(heading("Gift Box Items"));
  console.log(uniqueOf(data));
};

const findUniqueParticipant = data => {
  console.log(heading("Workshop Attendance"));
  console.log(uniqueOf(data));
};

const findUniqueStars = data => {
  console.log(heading("Space Camp Star Names"));
  console.log(uniqueOf(data));
};

const findUniqueTeaFlavors = data => {
  console.log(heading("Tea Tasting Flavors"));
  console.log(uniqueOf(data));
};

const findUniqueDrawingTools = data => {
  console.log(heading("Drawing Class Tools"));
  console.log(uniqueOf(data));
};

const findUniqueCookingSpices = data => {
  console.log(heading("Cooking Class Spices"));
  console.log(uniqueOf(data));
};

const findUniqueMovieGenre = data => {
  console.log(heading("Movie Genres"));
  console.log(uniqueOf(data));
};

const findUniqueBirdSpecies = data => {
  console.log(heading("Bird Species Records in Trip"));
  console.log(uniqueOf(data));
};

const findUniqueIceCreamFlavor = data => {
  console.log(heading("Ice Cream Tasting Event"));
  console.log(uniqueOf(data));
};

const findUniqueRecipeIngredients = data => {
  console.log(heading("Recipe Ingredients"));
  console.log(uniqueOf(data));
};

const findUniqueToppings = data => {
  console.log(heading("Chosen Toppings for Pizza"));
  console.log(uniqueOf(data));
};

const findUniqueColors = data => {
  console.log(heading("Color Swatches"));
  console.log(uniqueOf(data));
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
  findUniqueTeaFlavors([["mint", "ginger"], ["lemon"], ["mint"]]);
  findUniqueDrawingTools([["pencil", "charcoal"], ["ink"], ["pencil"]]);
  findUniqueCookingSpices([["salt", "pepper"], ["turmeric"], ["salt"]]);
  findUniqueMovieGenre([["horror", "comedy"], ["thriller", "horror"], ["fantasy"]]);
  findUniqueBirdSpecies([["pigeon", "crow"], ["crow"], ["sparrow", "crow"]]);
  findUniqueIceCreamFlavor([["vanilla", "chocolate"], ["strawberry"], ["chocolate"]]);
  findUniqueRecipeIngredients([["salt", "water"], ["sugar", "water", "vegetables"]]);
  findUniqueToppings([["cheese", "onion"], ["tomato"], ["cheese"]]);
  findUniqueColors([["blue", "yellow"], ["red", "green"], ["blue"]]);
};

main();