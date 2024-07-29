import convertData from './convertData';

describe('Given convertData function', () => {
  it('When receive data, should convert to string', () => {
    const result = convertData([{ uid: 'a', name: 'b', gender: 'c', yearOfBirth: 6, url: 'd' }]);

    expect(result).toMatch(/a,b,c,6,d/);
  });
});
