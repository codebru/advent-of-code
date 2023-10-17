/* eslint-disable no-console */
import { puzzleOneImput, puzzleTwoInput } from './puzzleInputs';
import getCaloriesFromTopElves from './01';
import { getRPSScore } from './02';

console.log('Question 1 - Part 1');
console.log(getCaloriesFromTopElves(puzzleOneImput, 1));
console.log('Question 1 - Part 2');
console.log(getCaloriesFromTopElves(puzzleOneImput, 3));
console.log('=================================');
console.log('Question 2 - Part 1');
console.log(getRPSScore(puzzleTwoInput));
