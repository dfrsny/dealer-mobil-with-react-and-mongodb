/* eslint-disable no-undef */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getBaseUrl from '../../utils/baseUrl';

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/cars`,
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

const carsApi = createApi({
    reducerPath: 'carsApi',
    baseQuery,
    tagTypes: ["Cars"], // tambahkan "tagTypes" untuk menyediakan tag
    endpoints: (builder) => ({
        fetchAllCars: builder.query({
            query: () => "/",
            providesTags: ["Cars"],
        }),
        fetchCarById: builder.query({
            query: (id) => `/${id}`,
            providesTags: (result, error, id) => [{ type: "Cars", id }],
        }),
        addCar: builder.mutation({ // perbaikan typo dari addCark menjadi addCar
            query: (newCar) => ({
                url: `/create-car`,
                method: "POST",
                body: newCar,
            }),
            invalidatesTags: ["Cars"],
        }),
        updateCar: builder.mutation({
            query: ({ id, ...rest }) => ({
                url: `/edit/${id}`,
                method: "PUT",
                body: rest,
            }),
            invalidatesTags: ["Cars"],
        }),
        deleteCar: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Cars"],
        }),
    }),
});

export const {
    useFetchAllCarsQuery,
    useFetchCarByIdQuery,
    useAddCarMutation, // perbaikan dari useAddCarkMutation
    useUpdateCarMutation,
    useDeleteCarMutation,
} = carsApi;

export default carsApi;
