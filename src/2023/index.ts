/* eslint-disable no-console */
import {
  puzzleOneImput,
  puzzleTwoInput,
  puzzleThreeInput,
} from './puzzleImputs';

import { getCalibrationValue } from './01';
import { sumPossibleGamesOfCubes } from './02';
import { addAllPartNumbers } from './03';

console.log('Question 1 - Part 1');
console.log(getCalibrationValue(puzzleOneImput));

console.log('Question 1 - Part 2');
console.log(getCalibrationValue(puzzleOneImput, true));

console.log('Question 2 - Part 1');
console.log(sumPossibleGamesOfCubes(puzzleTwoInput));

console.log('Question 3 - Part 1');
console.log(addAllPartNumbers(puzzleThreeInput));
