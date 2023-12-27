import {
  getCalibrationValue,
  combineFirstAndLastNumberInLine,
} from './01';

const testInput = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const testInputWithWordNumbers = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

test('can get the first and last number in the line', () => {
  expect(combineFirstAndLastNumberInLine('a1b2c3d4e5f')).toBe(15);
});

test('can get the first and last number in the line with wordnumbers', () => {
  expect(combineFirstAndLastNumberInLine('abcone2threexyz')).toBe(13);
});

test('can get the calibration value from the document', () => {
  expect(getCalibrationValue(testInput)).toBe(142);
});

test('can get a calibration value from a document with word numbers', () => {
  expect(getCalibrationValue(testInputWithWordNumbers)).toBe(281);
});
