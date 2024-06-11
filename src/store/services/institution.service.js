import apiSlice from './rootAPI';

export const institutionApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getInstitutions: builder.query({
      query: () => ({
        url: '/institutions',
        method: 'GET',
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({
                type: 'Institution',
                id: _id,
              })),
              'Institution',
            ]
          : ['Institution'],
    }),
  }),
});

export const { useGetInstitutionsQuery } = institutionApiSlice;
