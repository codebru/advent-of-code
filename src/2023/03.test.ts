import {
  addAllPartNumbers,
  getPartLocationsAndLengths,
  isSymbolAdjacent,
} from './03';

const TEST_INPUT = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

const OVERALL_ANSWER = 4361;

test('GIVE a valid game input THEN get the locations and legths of the numbers', () => {
  expect(getPartLocationsAndLengths(`..223..
.3...22
2...1..`)).toEqual([
    { location: { row: 0, collumn: 2 }, length: 3, number: 223 },
    { location: { row: 1, collumn: 1 }, length: 1, number: 3 },
    { location: { row: 1, collumn: 5 }, length: 2, number: 22 },
    { location: { row: 2, collumn: 0 }, length: 1, number: 2 },
    { location: { row: 2, collumn: 4 }, length: 1, number: 1 },
  ]);
});

test('GIVEN a location of a number WHEN it is symbol adjeacent THEN return true', () => {
  expect(
    isSymbolAdjacent(
      TEST_INPUT,
      {
        location: { row: 6, collumn: 2 },
        length: 3,
        number: 592,
      },
    ),
  ).toBe(true);
  expect(
    isSymbolAdjacent(
      TEST_INPUT,
      {
        location: { row: 4, collumn: 0 },
        length: 3,
        number: 617,
      },
    ),
  ).toBe(true);
  expect(
    isSymbolAdjacent(
      TEST_INPUT,
      {
        location: { row: 0, collumn: 0 },
        length: 3,
        number: 467,
      },
    ),
  ).toBe(true);
});

test('GIVEN a location of a number WHEN it is not symbol adjeacent THEN return false', () => {
  expect(
    isSymbolAdjacent(
      TEST_INPUT,
      {
        location: { row: 0, collumn: 6 },
        length: 3,
        number: 114,
      },
    ),
  ).toBe(false);
  expect(
    isSymbolAdjacent(
      TEST_INPUT,
      {
        location: { row: 5, collumn: 7 },
        length: 2,
        number: 58,
      },
    ),
  ).toBe(false);
});

test('GIVEN a valid game input THEN get the answer', () => {
  expect(addAllPartNumbers(TEST_INPUT)).toBe(OVERALL_ANSWER);
});
