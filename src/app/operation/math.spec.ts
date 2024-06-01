import { sum } from './math';

it('should return 5 when adding 2 and 3', () => {
  expect(sum(2, 3)).toEqual(5);
});

it('should return -1 when adding -2 and 1', () => {
  expect(sum(-2, 1)).toEqual(-1);
});

it('should return 0 when adding 0 and 0', () => {
  expect(sum(0, 0)).toEqual(0);
});
