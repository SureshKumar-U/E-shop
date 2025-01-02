import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";
import { apiSlice } from "./api.slice";
import { PRODUCTS_URL } from "../../constants";

export const productApiSice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: (category) => ({url:`${PRODUCTS_URL}?category=${category}` })
        }),
        getProduct: builder.query({
            query: (id) => ({url:`${PRODUCTS_URL}/${id}`}),
        }),
    }),
    keepUnusedDataFor:5
})
export const { useGetAllProductsQuery, useGetProductQuery } = productApiSice;