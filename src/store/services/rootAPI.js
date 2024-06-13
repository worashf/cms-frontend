import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = 'https://compliance-management-system.onrender.com/api/v1';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({}),
});

export default apiSlice;
