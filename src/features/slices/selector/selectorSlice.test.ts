import reducer, { add, remove, removeAll } from './selectorSlice';
import { initialState } from './selectorSlice.constants';

describe('Given selectorSlice', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });
  it('When add is called, should add item to an empty list', () => {
    const previousState = {
      selectedItems: [],
      count: 0
    };

    expect(
      reducer(
        previousState,
        add({
          uid: '123',
          url: '/',
          name: 'a',
          gender: 's',
          yearOfBirth: 0
        })
      )
    ).toEqual({
      selectedItems: [
        {
          uid: '123',
          url: '/',
          name: 'a',
          gender: 's',
          yearOfBirth: 0
        }
      ],
      count: 1
    });
  });
  it('When remove is called, should delete item from list', () => {
    expect(
      reducer(
        {
          selectedItems: [
            {
              uid: '123',
              url: '/',
              name: 'a',
              gender: 's',
              yearOfBirth: 0
            },
            {
              uid: '444',
              url: '/',
              name: 'q',
              gender: 'w',
              yearOfBirth: 2
            }
          ],
          count: 2
        },
        remove('123')
      )
    ).toEqual({
      selectedItems: [
        {
          uid: '444',
          url: '/',
          name: 'q',
          gender: 'w',
          yearOfBirth: 2
        }
      ],
      count: 1
    });
  });
  it('When removeAll is called, should delete all items from list', () => {
    expect(
      reducer(
        {
          selectedItems: [
            {
              uid: '123',
              url: '/',
              name: 'a',
              gender: 's',
              yearOfBirth: 0
            },
            {
              uid: '444',
              url: '/',
              name: 'q',
              gender: 'w',
              yearOfBirth: 2
            }
          ],
          count: 2
        },
        removeAll()
      )
    ).toEqual(initialState);
  });
});
