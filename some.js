const heading = text => `\n${text}\n${"-".repeat(text.length)}\n`;

const doesContainMusicalNote = data => {
  console.log(heading("Music Reharshal Note"));
  console.log(data.flatMap(x => x).some(element => element === "do"));
};

const doesContainMusicSequence = data => {
  console.log(heading("Choir Harmony Review"));
  console.log(data.flatMap(x => x).some(element => element === "so"));
};

const doesContainDanceStep = data => {
  console.log(heading("Dance Class Steps"));
  console.log(data.flatMap(x => x).some(element => element === "turn"));
};

const doesContainMeasurement = data => {
  console.log(heading("Fish Tank Measurement"));
  console.log(data.flatMap(x => x).some(element => element > 7));
};

const doesContainExposure = data => {
  console.log(heading("Photography Exposure Values"));
  console.log(data.flatMap(x => x).some(element => element === 4));
};

const main = () => {
  doesContainMusicalNote([["mi", "fa", "so"], ["do", "mi"], ["fa"]]);
  doesContainMusicSequence([["la", "la"], ["mi"], ["so", "la"]]);
  doesContainDanceStep([["step", "tap"], ["turn", "step"]]);
  doesContainMeasurement([[5, 6], [7], [6]]);
  doesContainExposure([2, 3], [1], [4, 2]);
};

main();