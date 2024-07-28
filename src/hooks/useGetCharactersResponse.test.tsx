import { Mock, vi } from 'vitest';
import { useGetCharactersResponse } from './useGetCharactersResponse';
import { renderHook } from '@testing-library/react';
import { useGetCharactersByNameQuery } from '../services/apiRTK';

vi.mock('../services/apiRTK', () => ({
  useGetCharactersByNameQuery: vi.fn()
}));

vi.mock('./ReduxHooks', () => ({
  useAppSelector: vi.fn()
}));

describe('Given useGetCharactersResponse hook', () => {
  it('when uses, result of useGetCharactersByNameQuery should be returned', () => {
    (useGetCharactersByNameQuery as Mock).mockReturnValue({ data: 'test' });
    const { result } = renderHook(useGetCharactersResponse);
    expect(result.current).toBe('test');
  });
});
