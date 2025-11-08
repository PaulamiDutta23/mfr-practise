const blueCount = (currentCount, element) => {
  const count = element === "blue" ? currentCount + 1 : currentCount;
  return count;
}

console.log(["red", "blue", "red", "green", "red", "blue"].reduce(blueCount, 0));
console.log(["red", "blue", "red", "blue", "red", "blue"].reduce(blueCount, 0));