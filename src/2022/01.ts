function getCaloriesFromMostElf(calorieLedger: string): number {
  const ledgerPerElf: Array<string> = calorieLedger.split('\n\n');
  const parsedLedgerPerElf: Array<Array<number>> = ledgerPerElf.map((ledger) => {
    const individualCalorieValueStrings: Array<string> = ledger.split('\n');
    const individualCalorieValues: Array<number> = individualCalorieValueStrings.map((value) => parseInt(value));
    return individualCalorieValues;
  });
  const elfValueArray: Array<number> = parsedLedgerPerElf.map((ledger) => {
    const calorieTotalForElf: number = ledger.reduce((previousValue: number, currentValue: number) => previousValue + currentValue);
    return calorieTotalForElf;
  });
  
  const sortedElfValueArray = elfValueArray.sort((a: number, b:number) => b - a);

  const highestCalories = sortedElfValueArray[0];

  console.log(sortedElfValueArray);
  return highestCalories;
}
export default getCaloriesFromMostElf;
