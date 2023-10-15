import { parseScoreSheet, getRPSScore, RPS } from './02';

const testScoresheet = `A Y
B X
C Z`;

test('can parse a scoresheet', () => {
  expect(parseScoreSheet(testScoresheet))
    .toStrictEqual([
      { opponentPick: RPS.rock, yourPick: RPS.paper },
      { opponentPick: RPS.paper, yourPick: RPS.rock },
      { opponentPick: RPS.scissors, yourPick: RPS.scissors },
    ]);
});

test('can get the toal score of all a players rock paper scissors games', () => {
  expect(getRPSScore(testScoresheet)).toBe(15);
});
