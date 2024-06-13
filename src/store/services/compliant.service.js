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
      console.log(params, "paa")
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

    
   
        
    }),
})

export const {
   useCreateCompliantMutation,
   useGetEmployeeCompliantRequestsQuery,
   useGetSingleCompliantQuery
} = compliantApiSlice