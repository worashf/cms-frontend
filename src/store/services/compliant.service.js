import apiSlice from './rootAPI'

export const compliantApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createCompliant: builder.mutation({
            query: ({ body }) => ({
              url: '/compliants',
              method: 'POST',
              body,
            }),
          }),

          getEmployeeCompliantRequests: builder.query({
            query: ({employeeId}) => ({
              url: `/compliants/${employeeId}`,
              method: 'GET',
            }),
            providesTags: (result) =>
              result
                ? [
                    ...result.data.map(({ _id }) => ({
                      type: 'Compliant',
                      id: _id,
                    })),
                    'Compliant',
                  ]
                : ['Compliant'],
          }),

    
   
        
    }),
})

export const {
   useCreateCompliantMutation,
   useGetEmployeeCompliantRequestsQuery
} = compliantApiSlice