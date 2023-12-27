const NUMBER_OF_LETTERS_TO_REPLACE = 1;
const LETTER_REPLACE_OFFSET = 1;

const replaceSecondChar = (
  inputString: string,
  matchString: string,
  replacement: string,
): string => {
  let workingString = inputString;

  while (workingString.indexOf(matchString) !== -1) {
    const index = workingString.indexOf(matchString);
    workingString = workingString.substring(0, index + LETTER_REPLACE_OFFSET)
    + replacement
    + workingString.substring(index + LETTER_REPLACE_OFFSET + NUMBER_OF_LETTERS_TO_REPLACE);
  }

  return workingString;
};

const replaceAllWordNumbers = (inputString: string): string => {
  let workingString = inputString;
  workingString = replaceSecondChar(workingString, 'one', '1');
  workingString = replaceSecondChar(workingString, 'two', '2');
  workingString = replaceSecondChar(workingString, 'three', '3');
  workingString = replaceSecondChar(workingString, 'four', '4');
  workingString = replaceSecondChar(workingString, 'five', '5');
  workingString = replaceSecondChar(workingString, 'six', '6');
  workingString = replaceSecondChar(workingString, 'seven', '7');
  workingString = replaceSecondChar(workingString, 'eight', '8');
  workingString = replaceSecondChar(workingString, 'nine', '9');

  return workingString;
};

const combineFirstAndLastNumberInLine = (line: String) => {
  const arrayOfNumbers = line
    .replace('one', '1')
    .replace('two', '2')
    .replace('three', '3')
    .replace('four', '4')
    .replace('five', '5')
    .replace('six', '6')
    .replace('seven', '7')
    .replace('eight', '8')
    .replace('nine', '9')
    .split('')
    .filter((value: String) => !Number.isNaN(parseInt(value as string, 10)));

  return parseInt(`${arrayOfNumbers.at(0)}${arrayOfNumbers.at(-1)}`, 10);
};

const getCalibrationValue = (calibrationSheet: String) => calibrationSheet
  .split('\n')
  .map(replaceAllWordNumbers)
  .map(combineFirstAndLastNumberInLine)
  .reduce((a: number, b: number) => a + b);

export { getCalibrationValue, combineFirstAndLastNumberInLine };
