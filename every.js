const areAllBelow32 = element => element.every(x => x < 32);

const areAllPositive = element => element.every(x => x > 0);

const areAllBelow120 = element => element.every(x => x < 120);

const heading = function (text) {
  return `\n${text}\n${"-".repeat(text.length)}\n`;
};

const doAllTemperatureSheetContainBelow32 = function () {
  console.log(heading("Weather Sensor Validation"));
  console.log([[22, 23], [25, 24, 22], [29]].every(areAllBelow32));
};

const doAllDataContainPositive = function () {
  console.log(heading("Rainfall Data Check"));
  console.log([[3, 4], [5, 2], [1]].every(areAllPositive));
};

const doAllReadingContainBelow120 = function () {
  console.log(heading("Electricity Reading Validation"));
  console.log([[110, 115] ,[118], [109]].every(areAllBelow120));
};

const main = function () {
  doAllTemperatureSheetContainBelow32();
  doAllDataContainPositive();
  doAllReadingContainBelow120();
};

main();