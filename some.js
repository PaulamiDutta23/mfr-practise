const doesDoExist = element => element.includes("do");

const doesSoExist = element => element.includes("so");

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

const main = function () {
  doesContainMusicalNote();
  doesContainMusicSequence();
};

main();