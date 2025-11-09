const heading = text => `\n${text}\n${"-".repeat(text.length)}\n`;

const addElements = (result, element) => result + element;

const sumOfList = (data, result) => data.flatMap(x => x).reduce(addElements, result);

const addCandyJarStock = data => {
  console.log(heading("Candy Jar Stock"));
  console.log(sumOfList(data, 0));
};

const addMiles = data => {
  console.log(heading("Fitness Tracker Miles"));
  console.log(sumOfList(data, 0));
};

const addCrateWeight = data => {
  console.log(heading("Vegetable Crate Total"));
  console.log(sumOfList(data, 0));
};

const addWaterAmount = data => {
  console.log(heading("Garden Watering Amount"));
  console.log(sumOfList(data, 0));
};

const addCraneNumber = data => {
  console.log(heading("Paper Crane Making"));
  console.log(sumOfList(data, 0));
};

const addDistributedPenNumber = data => {
  console.log(heading("Classroom Pen Distribution"));
  console.log(sumOfList(data, 0));
};

const addRepititions = data => {
  console.log(heading("Morning Exercise Count"));
  console.log(sumOfList(data, 0));
};

const addPages = data => {
  console.log(heading("Book Club Read Pages"));
  console.log(sumOfList(data, 0));
};

const addStandWeight = data => {
  console.log(heading("Fruit Stand Weight"));
  console.log(sumOfList(data, 0));
};

const addLaps = data => {
  console.log(heading("Jogging Laps Count"));
  console.log(sumOfList(data, 0));
};

const addGymRoutine = data => {
  console.log(heading("Gym Routine Count"));
  console.log(sumOfList(data, 0));
};

const addCandyNumber = data => {
  console.log(heading("Candy Distribution"));
  console.log(sumOfList(data, 0));
};

const addTrainPassengerNumber = data => {
  console.log(heading("Train Car Passenger Check"));
  console.log(sumOfList(data, 0));
};

const addGroceryQuantities = data => {
  console.log(heading("Weekly Grocery Tally"));
  console.log(sumOfList(data, 0));
};

const addCoinsTally = data => {
  console.log(heading("Coin Collection Tally"));
  console.log(sumOfList(data, 0));
};

const combineWords = data => {
  console.log(heading("Words in Worksheets"));
  console.log(sumOfList(data, ""));
};

const addPushups = data => {
  console.log(heading("Session Of Pushups"));
  console.log(sumOfList(data, 0));
};

const addDistances = data => {
  console.log(heading("Distance Records in Cycling Period"));
  console.log(sumOfList(data, 0));
};

const addParcelWeights = data => {
  console.log(heading("Parcel Weight Record in Courier Office"));
  console.log(sumOfList(data, 0));
};

const main = () => {
  addCandyJarStock([[5, 3], [2], [4, 1]]);
  addMiles([[2, 3, 2], [4], [1, 1]]);
  addCrateWeight([[4, 6], [2, 3, 1], [5]]);
  addWaterAmount([[1, 2, 1], [3], [2]]);
  addCraneNumber([[3, 2], [1], [4]]);
  addDistributedPenNumber([[2, 3], [1], [3, 2]]);
  addRepititions([[10, 20], [5], [15, 10]]);
  addPages([[12, 10], [5], [8, 7]]);
  addStandWeight([[4, 3], [2], [3, 1]]);
  addLaps([[2, 3, 2], [1], [4]]);
  addGymRoutine([[6, 4], [3, 2]]);
  addCandyNumber([[1, 2, 3], [2]]);
  addTrainPassengerNumber([[10, 12], [15]]);
  addGroceryQuantities([[3, 5], [2, 1]]);
  addCoinsTally([[1, 1, 2], [2, 1]]);
  combineWords([["hi", "good"], ["morning"], ["students"]]);
  addPushups([[10, 12], [5], [13, 10]]);
  addDistances([[10], [25], [5, 7]]);
  addParcelWeights([[2, 3], [5], [3, 2]]);
};

main();