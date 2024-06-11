import apiSlice from './rootAPI'

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: ({ credentials }) => ({
        url: '/login',
        method: 'POST',
        body:credentials,
      }),
      invalidatesTags: [
        'User',
        'Review',
        'Details',
        'Order',
        'Product',
        'Category',
        'Slider',
        'Banner',
      ],
    }),

    getUserInfo: builder.query({
      query: () => ({
        url: '/auth/user',
        method: 'GET',
      }),
      providesTags: ['User'],
      
    }),

    createUser: builder.mutation({
      query: ({ body }) => ({
        url: '/signup',
        method: 'POST',
        body,
      }),
      invalidatesTags: [
        'User',
        'Review',
        'Details',
        'Order',
        'Product',
        'Category',
        'Slider',
        'Banner',
      ],
    }),
    getUsers: builder.query({
      query: ({ page }) => ({
        url: `/api/user?page=${page}`,
        method: 'GET',
      }),
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.data.users.map(({ _id }) => ({
                type: 'User',
                id: _id,
              })),
              'User',
            ]
          : ['User'],
    }),

    editUser: builder.mutation({
      query: ({ body }) => ({
        url: '/api/user',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: (result, err, arg) => [{ type: 'User', id: arg.body._id }],
    }),

    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: `/api/user/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useLoginMutation,
  useGetUserInfoQuery,
  useCreateUserMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useEditUserMutation,
} = userApiSlice