const findReverseDanceSteps = (data) => {
  console.log(heading("Dance Steps"));
  console.log(
    data.flatMap((x) => x).reduce((reverse, element) => {
      reverse.unshift(element);
      return reverse;
    }, []),
  );
};

findReverseDanceSteps([["step", "tap"], ["turn", "step"]]);
