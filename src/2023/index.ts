/* eslint-disable no-console */
import { puzzleOneImput, puzzleTwoInput } from './puzzleImputs';

import { getCalibrationValue } from './01';
import { sumPossibleGamesOfCubes } from './02';

console.log('Question 1 - Part 1');
console.log(getCalibrationValue(puzzleOneImput));

console.log('Question 1 - Part 2');
console.log(getCalibrationValue(puzzleOneImput, true));

console.log('Question 2 - Part 1');
console.log(sumPossibleGamesOfCubes(puzzleTwoInput));
