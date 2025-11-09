const heading = text => `\n${text}\n${"-".repeat(text.length)}\n`;

const doesContainMusicalNote = data => {
  console.log(heading("Music Reharshal Note"));
  console.log(data.flatMap(x => x).some(element => element.includes("do")));
};

const doesContainMusicSequence = data => {
  console.log(heading("Choir Harmony Review"));
  console.log(data.flatMap(x => x).some(element => element.includes("so")));
};

const doesContainDanceStep = data => {
  console.log(heading("Dance Class Steps"));
  console.log(data.flatMap(x => x).some(element => element.includes("turn")));
};

const doesContainMeasurement = data => {
  console.log(heading("Fish Tank Measurement"));
  console.log(data.flatMap(x => x).some(x => x > 7));
};

const main = () => {
  doesContainMusicalNote([["mi", "fa", "so"], ["do", "mi"], ["fa"]]);
  doesContainMusicSequence([["la", "la"], ["mi"], ["so", "la"]]);
  doesContainDanceStep([["step", "tap"], ["turn", "step"]]);
  doesContainMeasurement([[5, 6], [7], [6]]);
};

main();