const heading = text => `\n${text}\n${"-".repeat(text.length)}\n`;

const addElements = (result, element) => result + element;

const sumOfList = (data, result) => data.flatMap(x => x).reduce(addElements, result);

const composeMessage = (description, input, result) => {
  console.log(`
    ${heading(description)}Input : ${input}\nResult : ${result}
  `);
};

const performSum = data => {
  const input = data[0];
  const description = data[1];
  const resultValue = data[2];
  const output = sumOfList(input, resultValue);
  return composeMessage(description, input, output);
};

const QS_SET_AS_SUM = [
  [[[5, 3], [2], [4, 1]], "Candy Jar Stock", 0],
  [[[2, 3, 2], [4], [1, 1]], "Fitness Tracker Miles", 0],
  [[[4, 6], [2, 3, 1], [5]], "Vegetable Crate Total", 0],
  [[[1, 2, 1], [3], [2]], "Garden Watering Amount", 0],
  [[[3, 2], [1], [4]], "Paper Crane Making", 0],
  [[[2, 3], [1], [3, 2]], "Classroom Pen Distribution", 0],
  [[[10, 20], [5], [15, 10]], "Morning Exercise Count", 0],
  [[[12, 10], [5], [8, 7]], "Book Club Read Pages", 0],
  [[[4, 3], [2], [3, 1]], "Fruit Stand Weight", 0],
  [[[2, 3, 2], [1], [4]], "Jogging Laps Count", 0],
  [[[6, 4], [3, 2]], "Gym Routine Count", 0],
  [[[1, 2, 3], [2]], "Candy Distribution", 0],
  [[[10, 12], [15]], "Train Car Passenger Check", 0],
  [[[3, 5], [2, 1]], "Weekly Grocery Tally", 0],
  [[[1, 1, 2], [2, 1]], "Coin Collection Tally", 0],
  [[["hi", "good"], ["morning"], ["students"]], "Words in Worksheets", ""],
  [[[10, 12], [5], [13, 10]], "Session Of Pushups", 0],
  [[[10], [25], [5, 7]], "Distance Records in Cycling Period", 0],
  [[[2, 3], [5], [3, 2]], "Parcel Weight Record in Courier Office", 0]
];

const main = () => {
  QS_SET_AS_SUM.forEach(performSum);
};

main();