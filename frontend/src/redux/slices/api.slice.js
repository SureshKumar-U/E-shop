import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {API_URL} from "../../constants"
const baseQuery = fetchBaseQuery({baseUrl:API_URL})

export const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes: ["Products","Users","Orders"],
    endpoints:(builder)=>({})
})