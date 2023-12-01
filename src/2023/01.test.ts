import { getCalibrationValue, combineFirstAndLastNumberInLine } from './01';

const testInput = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

test('can get the first and last number in the line', () => {
  expect(combineFirstAndLastNumberInLine('a1b2c3d4e5f')).toBe(15);
});

test('can get the calibration value from the document', () => {
  expect(getCalibrationValue(testInput)).toBe(142);
});
