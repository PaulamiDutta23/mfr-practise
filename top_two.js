const topTwo = (result, element) => {
  if (element > result[0]) {
    result[0] = element;
    return result;
  }
  if (element > result[1]) {
    result[1] = element;
  }
  return result;
};

const data = [10, 20, 12, 10, 20, 12, 30];
console.log(data.reduce(topTwo, [-Infinity, -Infinity]));
