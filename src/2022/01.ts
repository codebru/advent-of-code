import { reduceByAddingAllElements } from './utils';

const parseCalorieLedger = (calorieLedger: string): Array<Array<number>> =>
  calorieLedger.split('\n\n').map((ledger): Array<number> =>
    ledger.split('\n').map((value): number => parseInt(value, 10)));

const getTotalCaloriesForSingleElf =
  (elfLedger: Array<number>): number =>
    elfLedger.reduce(reduceByAddingAllElements);

const getCaloriesFromTopElves = (calorieLedger: string, numberOfElves: number): number =>
  parseCalorieLedger(calorieLedger)
    .map(getTotalCaloriesForSingleElf)
    .sort((a: number, b:number) => b - a)
    .slice(0, numberOfElves)
    .reduce(reduceByAddingAllElements);

export default getCaloriesFromTopElves;
