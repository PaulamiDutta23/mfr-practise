const heading = text => `\n${text}\n${"-".repeat(text.length)}\n`;

const countfestivalRibbon = data => {
  console.log(heading("Festival Ribbon Count"));
  console.log(data.reduce((x, y) => y === "blue" ? x + 1 : x, 0));
};

const countReturnedBook = data => {
  console.log(heading("Library Return Counter"));
  console.log(data.reduce((x, y) => y === "Dune" ? x + 1 : x, 0));
};

const countWildlifeSighting = data => {
  console.log(heading("Wildlife Sighting"));
  console.log(data.reduce((x, y) => y === "deer" ? x + 1 : x, 0));
};

const countIceCreamOrder = data => {
  console.log(heading("Ice Cream Orders"));
  console.log(data.flatMap(x => x).reduce((x, y) => y === "chocolate" ? x + 1 : x, 0));
};

const countPlaylistTrack = data => {
  console.log(heading("Music Playlist Repeats"));
  console.log(data.reduce((x, y) => y === "track1" ? x + 1 : x, 0));
};

const countFruitLog = data => {
  console.log(heading("Fruit Appearance in Log"));
  console.log(data.reduce((x, y) => y === "banana" ? x + 1 : x, 0));
};

const main = () => {
  countfestivalRibbon(["red", "blue", "red", "green", "red", "blue"]);
  countReturnedBook(["Dune", "Dune", "Foundation", "Dune"]);
  countWildlifeSighting(["deer", "deer", "rabbit", "deer"]);
  countIceCreamOrder([["vanilla", "chocolate"], ["strawberry"], ["chocolate"]]);
  countPlaylistTrack(["track1", "track2", "track1"]);
  countFruitLog(["banana", "apple", "mango", "banana"]);
};

main();