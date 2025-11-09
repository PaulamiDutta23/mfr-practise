const areAllBelow32 = element => element.every();

const areAllPositive = element => element.every();

const areAllBelow120 = element => element.every();

const heading = text => `\n${text}\n${"-".repeat(text.length)}\n`;

const doAllTemperatureSheetContainBelow32 = data => {
  console.log(heading("Weather Sensor Validation"));
  console.log(data.flatMap(x => x).every(element => element < 32));
};

const doAllDataContainPositive = data => {
  console.log(heading("Rainfall Data Check"));
  console.log(data.flatMap(x => x).every(element => element > 0));
};

const doAllReadingContainBelow120 = data => {
  console.log(heading("Electricity Reading Validation"));
  console.log(data.flatMap(x => x).every(element => element < 120));
};

const main = () => {
  doAllTemperatureSheetContainBelow32([[22, 23], [25, 24, 22], [29]]);
  doAllDataContainPositive([[3, 4], [5, 2], [1]]);
  doAllReadingContainBelow120([[110, 115] ,[118], [109]]);
};

main();