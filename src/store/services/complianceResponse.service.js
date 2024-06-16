import apiSlice from './rootAPI'

export const compliantResponseApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createCompliantResponse: builder.mutation({
            query: ({ body }) => ({
              url: '/compliant-responses',
              method: 'POST',
              body,
            }),
          }),

          getEmployeeCompliantResponses: builder.query({
            query: ({employeeId}) => {
              const params = new URLSearchParams();
            
              if (employeeId) params.append('employeeId', employeeId);
              return {
                  url: `/employees/compliants/responses?${params.toString()}`,
                  method: 'GET',
              } 
            },
    
          }),

          getSingleCompliantResponse: builder.query({
            query: ({compliantId}) => ({
              url: `/compliant-responses/${compliantId}`,
              method: 'GET',
            }),
          }),

    
   
        
    }),
})

export const {
   useCreateCompliantResponseMutation,
   useGetSingleCompliantResponseQuery,
   useGetEmployeeCompliantResponsesQuery

} = compliantResponseApiSlice