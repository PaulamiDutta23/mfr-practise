const heading = text => `\n${text}\n${"-".repeat(text.length)}\n`;

const insertUnique = (prevResult, element) => {
  const result = prevResult.slice();

  if(!result.includes(element)) {
    result.push(element);
  }

  return result;
};

const unique = data => data.flatMap(x => x).reduce(insertUnique, []);

const composeMessage = (description, input, result) => {
  console.log(`
    ${heading(description)}Input : ${input}\nResult : ${result}
  `);
};

const performUnique = data => {
  const input = data[0];
  const description = data[1];
  const result = unique(input);
  return composeMessage(description, input, result);
};

const QS_SET_AS_UNIQUE = [
  [[["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]], "Stargazing Log"],
  [["sparrow", "crow", "sparrow", "eagle", "crow"], "Bird Watching"],
  [[["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]], "Classroom Attendance Check"],
  [[["blue", "yellow"], ["yellow", "green"], ["blue"]], "Art Workshop Color Variety"],
  [[["rice", "lentils"], ["rice"], ["curd", "lentils"]], "Lunchbox Ingredient Inventory"],
  [["small", "large", "medium", "small"], "Post Office Parcel Size"],
  [[[1, 2], [3], [2, 4, 1]], "Study Group Completion"],
  [[["apple", "banana"], ["apple"], ["apple", "orange"]], "Fruit Basket Inventory",],
  [[["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]], "Movie Marathon Titles"],
  [["A", "B", "A", "C", "B"], "Name Badge Sorting"],
  [[["rose", "lily"], ["lily", "tulip"]], "Flowers in Bouquets"],
  [[["A", "B"], ["B", "C"], ["A"]], "Train Station Annnouncements"],
  [[["idli", "vada"], ["vada", "upma"]], "School Snack List"],
  [[["sunset", "bird"], ["river"], ["sunset"]], "Photo Contest Entries"],
  [[["cheese", "bread"], ["tomato"], ["bread"]], "Cafe Order Ingredients"],
  [[["sky", "blue"], ["night"], ["sky", "dark"]], "Student Poetry Words"],
  [[["toy", "sticker"], ["candy", "sticker"]], "Gift Box Items"],
  [[["Tom", "Jerry"], ["Jerry", "Spike"]], "Workshop Attendance"],
  [[["Vega", "Sirius"], ["Vega", "Rigel"]], "Space Camp Star Names"],
  [[["mint", "ginger"], ["lemon"], ["mint"]], "Tea Tasting Flavors"],
  [[["pencil", "charcoal"], ["ink"], ["pencil"]], "Drawing Class Tools"],
  [[["salt", "pepper"], ["turmeric"], ["salt"]], "Cooking Class Spices"],
  [[["horror", "comedy"], ["thriller", "horror"], ["fantasy"]], "Movie Genres"],
  [[["pigeon", "crow"], ["crow"], ["sparrow", "crow"]], "Bird Species Records in Trip"],
  [[["vanilla", "chocolate"], ["strawberry"], ["chocolate"]], "Ice Cream Tasting Event"],
  [[["salt", "water"], ["sugar", "water", "vegetables"]], "Recipe Ingredients"],
  [ [["cheese", "onion"], ["tomato"], ["cheese"]], "Chosen Toppings for Pizza"],
  [[["blue", "yellow"], ["red", "green"], ["blue"]], "Color Swatches"]
];

const main = () => { 
  QS_SET_AS_UNIQUE.forEach(performUnique);
};

main();