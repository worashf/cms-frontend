import apiSlice from './rootAPI'

export const reviewApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProductReviews: builder.query({
            query: ({ product_id, user_id,start, limit}) => {
                const params   = new URLSearchParams()
                if (product_id) params.append('product_id',product_id);
                if (user_id) params.append('user_id',user_id);
                if (limit) params.append('limit', limit);
                if (start) params.append('start', start);
              return {
                url: `/products-reviews?${params.toString()}`,
                method: 'GET',
              }
            },
            providesTags: result =>
              result
                ? [
                    ...result.data.map(({ _id }) => ({
                      type: 'Review',
                      id: _id,
                    })),
                    'Review',
                  ]
                : ['Review'],
          }),
      
          getSingleReview: builder.query({
            query: ({ id }) => ({
              url: `/api/reviews/${id}`,
              method: 'GET',
            }),
            providesTags: (result, err, arg) => [{ type: 'Review', id: arg.id }],
          }),
          createReview: builder.mutation({
            query: ({ body }) => ({
              url: `/doRatings`,
              method: 'POST',
              body,
            }),
            invalidatesTags: ['Review'],
          }),
      
      }),
    });

export const {
    useGetProductReviewsQuery,
    useGetSingleReviewQuery,
    useCreateReviewMutation

} = reviewApiSlice 