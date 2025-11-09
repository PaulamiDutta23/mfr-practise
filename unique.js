const heading = text => `\n${text}\n${"-".repeat(text.length)}\n`;

const selectDistinct = (prevResult, element) => {
  const result = prevResult.slice();

  if(!result.includes(element)) {
    result.push(element);
  }

  return result;
};

const uniqueOf = data => data.flatMap(x => x).reduce(selectDistinct, []);

const composeMessage = (description, data, result) => {
  console.log(`
    ${heading(description)}Input : ${data}\nResult : ${result}
  `);
};

const testUniqueOf = (description, data) => {
  const result = uniqueOf(data);
  return composeMessage(description, data, result);
};

const main = () => {
  testUniqueOf("Stargazing Log", [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]]);
  testUniqueOf("Bird Watching", ["sparrow", "crow", "sparrow", "eagle", "crow"]);
  testUniqueOf("Classroom Attendance Check", [["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]]);
  testUniqueOf("Art Workshop Color Variety", [["blue", "yellow"], ["yellow", "green"], ["blue"]]);
  testUniqueOf("Lunchbox Ingredient Inventory", [["rice", "lentils"], ["rice"], ["curd", "lentils"]]);
  testUniqueOf("Post Office Parcel Size", ["small", "large", "medium", "small"]);
  testUniqueOf("Study Group Completion", [[1, 2], [3], [2, 4, 1]]);
  testUniqueOf("Fruit Basket Inventory", [["apple", "banana"], ["apple"], ["apple", "orange"]]);
  testUniqueOf("Movie Marathon Titles", [["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]]);
  testUniqueOf("Name Badge Sorting", ["A", "B", "A", "C", "B"]);
  testUniqueOf("Flowers in Bouquets", [["rose", "lily"], ["lily", "tulip"]]);
  testUniqueOf("Train Station Annnouncements", [["A", "B"], ["B", "C"], ["A"]]);
  testUniqueOf("School Snack List", [["idli", "vada"], ["vada", "upma"]]);
  testUniqueOf("Photo Contest Entries", [["sunset", "bird"], ["river"], ["sunset"]]);
  testUniqueOf("Cafe Order Ingredients", [["cheese", "bread"], ["tomato"], ["bread"]]);
  testUniqueOf("Student Poetry Words", ["sky", "blue"], ["night"], ["sky", "dark"]);
  testUniqueOf("Gift Box Items", [["toy", "sticker"], ["candy", "sticker"]]);
  testUniqueOf("Workshop Attendance", [["Tom", "Jerry"], ["Jerry", "Spike"]]);
  testUniqueOf("Space Camp Star Names", [["Vega", "Sirius"], ["Vega", "Rigel"]]);
  testUniqueOf("Tea Tasting Flavors", [["mint", "ginger"], ["lemon"], ["mint"]]);
  testUniqueOf("Drawing Class Tools", [["pencil", "charcoal"], ["ink"], ["pencil"]]);
  testUniqueOf("Cooking Class Spices", [["salt", "pepper"], ["turmeric"], ["salt"]]);
  testUniqueOf("Movie Genres", [["horror", "comedy"], ["thriller", "horror"], ["fantasy"]]);
  testUniqueOf("Bird Species Records in Trip", [["pigeon", "crow"], ["crow"], ["sparrow", "crow"]]);
  testUniqueOf("Ice Cream Tasting Event", [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]]);
  testUniqueOf("Recipe Ingredients", [["salt", "water"], ["sugar", "water", "vegetables"]]);
  testUniqueOf("Chosen Toppings for Pizza", [["cheese", "onion"], ["tomato"], ["cheese"]]);
  testUniqueOf("Color Swatches", [["blue", "yellow"], ["red", "green"], ["blue"]]);
};

main();