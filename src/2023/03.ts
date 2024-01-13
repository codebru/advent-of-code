const isNumber = (char: string): boolean => !Number.isNaN(Number(char));

type Location = { row: number, collumn: number };
type Length = number;
type Part = {
  location: Location,
  length: Length,
  number: number,
};

const parseEngineSchematic = (engineSchematic: string): string[][] => engineSchematic.split('\n')
  .map((row) => row.split(''));

const isSymbol = (char: string): boolean => char === '!'
|| char === '@'
|| char === '£'
|| char === '€'
|| char === '$'
|| char === '#'
|| char === '%'
|| char === '^'
|| char === '&'
|| char === '*'
|| char === '('
|| char === ')'
|| char === '-'
|| char === '_'
|| char === '+'
|| char === '='
|| char === '{'
|| char === '['
|| char === ']'
|| char === '}'
|| char === ':'
|| char === ';'
|| char === '"'
|| char === "'"
|| char === '|'
|| char === '\\'
|| char === '<'
|| char === ','
|| char === '>'
// || char === '.' not this one
|| char === '?'
|| char === '/'
|| char === '~';

const isSymbolAdjacent = (engineSchematic: string, part: Part): boolean => {
  const parsedEngineSchematic = parseEngineSchematic(engineSchematic);

  // Row above
  if (part.location.row - 1 >= 0) {
    for (
      let i = part.location.collumn - 1;
      i < part.location.collumn + part.length + 1;
      i += 1
    ) {
      if (i >= 0 && i < parsedEngineSchematic[part.location.row].length) {
        if (isSymbol(parsedEngineSchematic[part.location.row - 1][i])) {
          return true;
        }
      }
    }
  }

  // That row
  if (
    part.location.collumn - 1 >= 0
    && isSymbol(parsedEngineSchematic[part.location.row][part.location.collumn - 1])
  ) return true;
  if (
    part.location.collumn + part.length < parsedEngineSchematic[part.location.row].length
    && isSymbol(parsedEngineSchematic[part.location.row][part.location.collumn + part.length])
  ) return true;

  // Row below
  if (part.location.row + 1 < parsedEngineSchematic.length) {
    for (
      let i = part.location.collumn - 1;
      i < part.location.collumn + part.length + 1;
      i += 1
    ) {
      if (i >= 0 && i < parsedEngineSchematic[part.location.row].length) {
        if (isSymbol(parsedEngineSchematic[part.location.row + 1][i])) {
          return true;
        }
      }
    }
  }

  return false;
};

const getPartLocationsAndLengths = (engineSchematic: string): Part[] => {
  const parts: Part[] = [];

  parseEngineSchematic(engineSchematic)
    .forEach((row, rowIndex) => {
      row.forEach((collumn, collumnIndex) => {
        if (isNumber(collumn)) {
          if (collumnIndex === 0 || !isNumber(row[collumnIndex - 1])) {
            let numberLength = collumnIndex;
            while (numberLength <= row.length - 1 && isNumber(row[numberLength])) {
              numberLength += 1;
            }
            numberLength -= collumnIndex;
            parts.push({
              location: {
                row: rowIndex,
                collumn: collumnIndex,
              },
              length: numberLength,
              number: Number(row.slice(collumnIndex, collumnIndex + numberLength).join('')),
            });
          }
        }
      });
    });
  return parts;
};

const addAllPartNumbers = (
  engineSchematic: string,
): number => getPartLocationsAndLengths(engineSchematic)
  .map((part) => {
    if (isSymbolAdjacent(engineSchematic, part)) {
      return part.number;
    }
    return 0;
  }).reduce((a, b) => a + b);

export {
  addAllPartNumbers,
  getPartLocationsAndLengths,
  isSymbolAdjacent,
};
