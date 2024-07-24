import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CharacterResponse, Response } from './api.types';

export const apiRTK = createApi({
  reducerPath: 'characterSTApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://stapi.co/api/v1/rest/character' }),
  endpoints: (builder) => ({
    getCharactersByName: builder.query<Response, { name: string; page: number }>({
      query: ({ name, page = 0 }) => ({
        url: `/search?pageNumber=${page}&pageSize=10`,
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({ name })
      })
    }),
    getCharacterByUid: builder.query<CharacterResponse, string>({
      query: (uid) => `?uid=${uid}`
    })
  })
});

export const { useGetCharactersByNameQuery, useGetCharacterByUidQuery } = apiRTK;
