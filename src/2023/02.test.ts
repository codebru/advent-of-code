import {
  getCubeNumbers, getId, parseMaxForEachCube, sumPossibleGamesOfCubes,
} from './02';

const TEST_INPUT = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;
const CORRECT_ANSWER = 8;

test('GIVEN a line THEN get the id', () => {
  expect(getId('Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red')).toBe(3);
});

test('GIVEN a cube name THEN get an array of its numbers', () => {
  expect(getCubeNumbers('Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red', 'red')).toMatchObject([20, 4, 1]);
});

test('GIVEN a test Input THEN make parse max', () => {
  const input = `Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
  `;

  expect(parseMaxForEachCube(input)).toMatchObject([
    {
      gameId: 3, red: 20, green: 13, blue: 6,
    },
    {
      gameId: 5, red: 6, green: 3, blue: 2,
    },
  ]);
});

test('GIVEN a valid game input THEN get the answer', () => {
  expect(sumPossibleGamesOfCubes(TEST_INPUT)).toBe(CORRECT_ANSWER);
});
