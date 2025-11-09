const doesDoExist = element => element.includes("do");

const doesSoExist = element => element.includes("so");

const doesTurnExist = element => element.includes("turn");

const doesExistAbove7 = element => element.some(x => x > 7);

const heading = function (text) {
  return `\n${text}\n${"-".repeat(text.length)}\n`;
};

const doesContainMusicalNote = function () {
  console.log(heading("Music Reharshal Note"));
  console.log([["mi", "fa", "so"], ["do", "mi"], ["fa"]].some(doesDoExist));
};

const doesContainMusicSequence = function () {
  console.log(heading("Choir Harmony Review"));
  console.log([["la", "la"], ["mi"], ["so", "la"]].some(doesSoExist));
};

const doesContainDanceStep = function () {
  console.log(heading("Dance Class Steps"));
  console.log([["step", "tap"], ["turn", "step"]].some(doesTurnExist));
};

const doesContainMeasurement = function () {
  console.log(heading("Fish Tank Measurement"));
  console.log([[5, 6], [7], [6]].some(doesExistAbove7));
};

const main = function () {
  doesContainMusicalNote();
  doesContainMusicSequence();
  doesContainDanceStep();
  doesContainMeasurement();
};

main();