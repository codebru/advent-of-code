import getCaloriesFromTopElves from './01';

const testInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`;

test('can get the calorie ammount from the elf with the most calories', () => {
  expect(getCaloriesFromTopElves(testInput, 1)).toBe(24000);
});

test('can get the calorie amount from the three most laiden elves', () => {
  expect(getCaloriesFromTopElves(testInput, 3)).toBe(45000);
});
