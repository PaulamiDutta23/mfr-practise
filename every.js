const doAllLesser32 = element => element.every(x => x < 32);

const doAllPositive = element => element.every(x => x > 0);

const heading = function (text) {
  return `\n${text}\n${"-".repeat(text.length)}\n`;
};

const doAllTemperatureSheetContainLesser32 = function () {
  console.log(heading("Weather Sensor Validation"));
  console.log([[22, 23], [25, 24, 22], [29]].every(doAllLesser32));
};

const doAllDataContainPositive = function () {
  console.log(heading("Rainfall Data Check"));
  console.log([[3, 4], [5, 2], [1]].every(doAllPositive));
};

const main = function () {
  doAllTemperatureSheetContainLesser32();
  doAllDataContainPositive();
};

main();