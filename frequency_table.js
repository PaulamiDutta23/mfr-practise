//frequncy table using find
const frequency = (occurrences, target) => {
  const element = occurrences.find((x) => x[0] === target);

  if (element) {
    element[1] += 1;
    return occurrences;
  }

  occurrences.push([target, 1]);
  return occurrences;
};

//frequncy table using findIndex
/*const frequency = (occurrences, element) => {
  const index = occurrences.findIndex((x) => x[0] === element);

  if (index !== -1) {
    index[1] += 1;
    return occurrences;
  }

  occurrences.push([element, 1]);
  return occurrences;
};*/

const data = [10, 20, 12, 10, 20, 12, 30];
console.log(data.reduce(frequency, []));
