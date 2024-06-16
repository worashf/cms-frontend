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
            query: ({employeeId}) => {
              const params = new URLSearchParams();
            
              if (employeeId) params.append('employeeId', employeeId);
              return {
                  url: `/compliants?${params.toString()}`,
                  method: 'GET',
              } 
            },
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

          getSingleCompliant: builder.query({
            query: ({compliantId}) => ({
              url: `/compliant-detail/${compliantId}`,
              method: 'GET',
            }),
          }),

          getAllValidCompliants: builder.query({
            query: () => ({
              url: `/valid-compliants`,
              method: 'GET',
            }),
          }),
          getAllInValidCompliants: builder.query({
            query: () => ({
              url: `/invalid-compliants`,
              method: 'GET',
            }),
          }),

    
   
        
    }),
})

export const {
   useCreateCompliantMutation,
   useGetEmployeeCompliantRequestsQuery,
   useGetSingleCompliantQuery,
   useGetAllInValidCompliantsQuery,
   useGetAllValidCompliantsQuery
} = compliantApiSlice