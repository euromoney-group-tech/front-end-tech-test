import { alphabeticHandler, numericHandler } from './sortHandlers';

describe('alphabeticHandler', () => {
  it('should sort an alphabetical list ascending', () => {
    const data = ['a', 'c', 'b'];
    expect(data.sort(alphabeticHandler)).toEqual(['a', 'b', 'c'])
  });
});

describe('numericHandler', () => {
  it('should sort a numeric list ascending', () => {
    const data = [1, 3, 2];
    expect(data.sort(alphabeticHandler)).toEqual([1, 2, 3])
  });
});
