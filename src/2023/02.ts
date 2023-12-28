type ExampleRound = {
  gameId: number,
  red: number,
  green: number,
  blue: number,
};

const ID_POSITION_IN_LINE = 1;

const getId = (line: string): number => parseInt(line.split(' ')[ID_POSITION_IN_LINE], 10);

const getCubeNumbers = (line: String, cubeName: string): number[] => {
  const splitLine = line
  .replaceAll(',', '')
  .replaceAll(';', '')
  .split(' ');

  const allForMatch = splitLine.map((entry, index) => {
    if (entry === cubeName) return parseInt(splitLine[index - 1], 10);
    return null;
  })
    .filter((entry) => entry !== null) as number[];
  
    return allForMatch;
};

const getMaxOfCubeNumbers = (
  line: String,
  cubeName: string
  ): number => getCubeNumbers(line, cubeName)
  .reduce((previous, current) => current > previous ? current : previous)

const parseMaxForEachCube = (input: string) : ExampleRound[] => input
  .split('\n')
  .filter((line) => line.startsWith('Game'))
  .map((line) => ({
    gameId: getId(line), red: getMaxOfCubeNumbers(line, 'red'), green: getMaxOfCubeNumbers(line, 'green'), blue: getMaxOfCubeNumbers(line, 'blue'),
  }));

const sumPossibleGamesOfCubes = (input: string) => 1;

export {
  getCubeNumbers, getId, parseMaxForEachCube, sumPossibleGamesOfCubes,
};
