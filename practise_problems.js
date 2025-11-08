const blueCount = (currentCount, element) => {
  const count = element === "blue" ? currentCount + 1 : currentCount;
  return count;
};

const selectDistinct = (result, element) => {
  if (!result.includes(element)) {
    result.push(element);
  }
  return result;
};

const heading = function (text) {
  return `\n${text}\n${"-".repeat(text.length)}\n`;
};

const festivalRibbonCount = function () {
  console.log(heading("Festival Ribbon Count"));
  console.log(["red", "blue", "red", "green", "red", "blue"].reduce(blueCount, 0));
  console.log(["red", "blue", "red", "blue", "red", "blue"].reduce(blueCount, 0));
};

const stargazingLog = function () {
  console.log(heading("Stargazing Log"));
  console.log([["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]].flatMap(x => x).reduce(selectDistinct, []));
};

const birdWatch = function () {
  console.log(heading("Bird Watching"));
  console.log(["sparrow", "crow", "sparrow", "eagle", "crow"].reduce(selectDistinct, []));
};

const attendanceCheck = function () {
  console.log(heading("Classroom Attendance Check"));
  console.log([["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]].flatMap(x => x).reduce(selectDistinct, []));
};

const main = function () {
  festivalRibbonCount();
  stargazingLog();
  birdWatch();
  attendanceCheck();
};

main();