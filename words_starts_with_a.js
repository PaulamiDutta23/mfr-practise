const sentences = [
  "just a phrase",
  "also another phrase",
  "arbitrary phrase",
  "An interesting phrase",
];

const doesStartWithA = (element) => element.toLowerCase().startsWith('a');

const splitWords = (element) => element.split(" ");

const wordsStartsWithA = (text) => text.flatMap(splitWords).filter(doesStartWithA);

console.log(wordsStartsWithA(sentences));