/* eslint-disable no-undef */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../utils/baseUrl';

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/news`,
    credentials: 'include',
    prepareHeaders: (headers) => { // menggunakan lowercase "headers"
        const token = localStorage.getItem('token');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        headers.set('Content-Type', 'application/json'); // memastikan Content-Type JSON
        return headers;
    },
});

const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery,
    tagTypes: ["News"], // tambahkan "tagTypes" untuk menyediakan tag
    endpoints: (builder) => ({
        fetchAllNews: builder.query({
            query: () => "/",
            providesTags: ["News"],
        }),
        fetchNewsById: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{ type: "News", id }],
        }),
        addNews: builder.mutation({ // perbaikan typo dari addCark menjadi addCar
            query: (newNews) => ({
                url: `/create-news`,
                method: "POST",
                body: newNews,
            }),
            invalidatesTags: ["News"],
        }),
        updateNews: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/edit/${id}`,
                method: "PUT",
                body: rest,
            }),
            invalidatesTags: ["News"],
        }),
        deleteNews: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["News"],
        }),
    }),
});

export const {
    useFetchAllNewsQuery,
    useFetchNewsByIdQuery,
    useAddNewsMutation, // perbaikan dari useAddCarkMutation
    useUpdateNewsMutation,
    useDeleteNewsMutation,
} = newsApi;

export default newsApi;
