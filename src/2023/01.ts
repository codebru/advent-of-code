const combineFirstAndLastNumberInLine = (line: String) => {
  const arrayOfNumbers = line.split('')
    .filter((value: String) => !Number.isNaN(parseInt(value as string, 10)));

  return parseInt(`${arrayOfNumbers.at(0)}${arrayOfNumbers.at(-1)}`, 10);
};

const getCalibrationValue = (calibrationSheet: String) => calibrationSheet.split('\n')
  .map(combineFirstAndLastNumberInLine)
  .reduce((a: number, b: number) => a + b);

export { getCalibrationValue, combineFirstAndLastNumberInLine };
