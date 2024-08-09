import getFirstValue from './getFirstValue';

describe('Given getFirstValue function', () => {
  it('When receive string, should return string', () => {
    const value = 'qwe';

    expect(getFirstValue(value)).toMatch(value);
  });
  it('When receive Array of string, should return first item', () => {
    const value = ['qwe', 'asd'];

    expect(getFirstValue(value)).toMatch('qwe');
  });
});
