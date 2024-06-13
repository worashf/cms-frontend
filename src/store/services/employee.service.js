import apiSlice from './rootAPI'

export const  employeeApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({

    getEmployees: builder.query({
      query: ({}) => ({
        url: `/employees`,
        method: 'GET',
      }),

    }),

  }),
})

export const {
useGetEmployeesQuery

  
} = employeeApiSlice