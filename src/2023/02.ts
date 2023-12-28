type Round = {
  gameId: number,
  red: number,
  green: number,
  blue: number,
};

const ID_POSITION_IN_LINE = 1;
const CUBES_IN_ROUND_RED = 12;
const CUBES_IN_ROUND_GREEN = 13;
const CUBES_IN_ROUND_BLUE = 14;

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
  cubeName: string,
): number => getCubeNumbers(line, cubeName)
  .reduce((previous, current) => (current > previous ? current : previous));

const parseMaxForEachCube = (input: string) : Round[] => input
  .split('\n')
  .filter((line) => line.startsWith('Game'))
  .map((line) => ({
    gameId: getId(line), red: getMaxOfCubeNumbers(line, 'red'), green: getMaxOfCubeNumbers(line, 'green'), blue: getMaxOfCubeNumbers(line, 'blue'),
  }));

const possibleRound = (round: Round): boolean => round.red <= CUBES_IN_ROUND_RED
&& round.green <= CUBES_IN_ROUND_GREEN
&& round.blue <= CUBES_IN_ROUND_BLUE;

const returnIdIfPossibleRound = (round: Round): number | null =>
  (possibleRound(round) ? round.gameId : null);

const sumPossibleGamesOfCubes = (input: string) => parseMaxForEachCube(input)
  .map(returnIdIfPossibleRound)
  .filter((gameId) => gameId !== null)
  .reduce((previous, current) => (previous as number) + (current as number));

export {
  getCubeNumbers, getId, parseMaxForEachCube, sumPossibleGamesOfCubes,
};
