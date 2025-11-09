const blueCount = (prevCount, element) => {
  const count = element === "blue" ? prevCount + 1 : prevCount;
  return count;
};

const countDune = (prevCount, element) => {
  const count = element === "Dune" ? prevCount + 1 : prevCount;
  return count;
};

const countDeer = (prevCount, element) => {
  const count = element === "deer" ? prevCount + 1 : prevCount;
  return count;
};

const countChocolate = (prevCount, element) => {
  const count = element.includes("chocolate") ? prevCount + 1 : prevCount;
  return count;
};

const heading = function (text) {
  return `\n${text}\n${"-".repeat(text.length)}\n`;
};

const countfestivalRibbon = function () {
  console.log(heading("Festival Ribbon Count"));
  console.log(["red", "blue", "red", "green", "red", "blue"].reduce(blueCount, 0));
};

const countReturnedBook = function () {
  console.log(heading("Library Return Counter"));
  console.log(["Dune", "Dune", "Foundation", "Dune"].reduce(countDune, 0));
};

const countWildlifeSighting = function () {
  console.log(heading("Wildlife Sighting"));
  console.log(["deer", "deer", "rabbit", "deer"].reduce(countDeer, 0));
};

const countIceCreamOrder = function () {
  console.log(heading("Ice Cream Orders"));
  console.log([["vanilla", "chocolate"], ["strawberry"], ["chocolate"]].reduce(countChocolate, 0));
};

const main = function () {
  countfestivalRibbon();
  countReturnedBook();
  countWildlifeSighting();
  countIceCreamOrder();
};

main();