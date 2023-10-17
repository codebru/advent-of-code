import { reduceByAddingAllElements } from './utils';

enum RPS {
  rock,
  paper,
  scissors,
}

interface RPSRound {
  opponentPick: RPS,
  yourPick: RPS,
}

const charToRPS = (character: string): RPS => {
  switch (character) {
    case 'A':
    case 'X':
      return RPS.rock;
    case 'B':
    case 'Y':
      return RPS.paper;
    case 'C':
    case 'Z':
      return RPS.scissors;
    default:
      throw new Error('Unsupported RPS character');
  }
};

const parseScoreSheet = (scoresheet: string): Array<RPSRound> =>
  scoresheet.split('\n')
    .map((gameString: string) => {
      const roundArray: Array<string> = gameString.split(' ');
      return { opponentPick: charToRPS(roundArray[0]), yourPick: charToRPS(roundArray[1]) };
    });

const selectedShapeScore = (selected: RPS): number => {
  switch (selected) {
    case RPS.rock:
      return 1;
    case RPS.paper:
      return 2;
    case RPS.scissors:
      return 3;
    default:
      throw new Error('RPS Enum not used');
  }
};

const winDrawLoseScore = (round: RPSRound): number => {
  switch (round.yourPick) {
    case RPS.rock:
      switch (round.opponentPick) {
        case RPS.rock:
          return 3;
        case RPS.paper:
          return 0;
        case RPS.scissors:
          return 6;
        default:
          throw new Error('Not implemented for this pick');
      }
    case RPS.paper:
      switch (round.opponentPick) {
        case RPS.rock:
          return 6;
        case RPS.paper:
          return 3;
        case RPS.scissors:
          return 0;
        default:
          throw new Error('Not implemented for this pick');
      }
    case RPS.scissors:
      switch (round.opponentPick) {
        case RPS.rock:
          return 0;
        case RPS.paper:
          return 6;
        case RPS.scissors:
          return 3;
        default:
          throw new Error('Not implemented for this pick');
      }
    default:
      throw new Error('Not implemented for this pick');
  }
};

const getScoreForRound = (round: RPSRound): number =>
  selectedShapeScore(round.yourPick) + winDrawLoseScore(round);

const getRPSScore = (scoresheet: string): number => parseScoreSheet(scoresheet)
  .map(getScoreForRound)
  .reduce(reduceByAddingAllElements);

export {
  parseScoreSheet, getRPSScore, RPS, winDrawLoseScore,
};
