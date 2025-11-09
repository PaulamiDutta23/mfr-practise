const doesDoExist = element => element.includes("do");

const doesSoExist = element => element.includes("so");

const doesTurnExist = element => element.includes("turn");

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

const main = function () {
  doesContainMusicalNote();
  doesContainMusicSequence();
  doesContainDanceStep();
};

main();