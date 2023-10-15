/* eslint-disable no-console */
import { puzzleOneImput } from './puzzleInputs';
import getCaloriesFromTopElves from './01';

console.log('Question 1 - Part 1');
console.log(getCaloriesFromTopElves(puzzleOneImput, 1));
console.log('Question 1 - Part 2');
console.log(getCaloriesFromTopElves(puzzleOneImput, 3));
