const parseCalorieLedger = (calorieLedger: string): Array<Array<number>> =>
  calorieLedger.split('\n\n').map((ledger): Array<number> =>
    ledger.split('\n').map((value): number => parseInt(value, 10)));

const getTotalCaloriesForSingleElf =
  (elfLedger: Array<number>): number =>
    elfLedger.reduce((previousValue: number, currentValue: number) => previousValue + currentValue);

const getCaloriesFromMostElf = (calorieLedger: string): number =>
  parseCalorieLedger(calorieLedger)
    .map(getTotalCaloriesForSingleElf)
    .sort((a: number, b:number) => b - a)[0];

export default getCaloriesFromMostElf;
