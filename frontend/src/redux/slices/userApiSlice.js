import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query";
import { apiSlice } from "./api.slice";
import { USERS_URL } from "../../constants";

const LOGIN_URL = USERS_URL + "/login";
const REGISTER_URL = USERS_URL + "/register";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        login : builder.mutation({
            query :(body)=>({
                url : LOGIN_URL,
                body : body,
                method : "POST"
            })
        }),
        signup: builder.mutation({
            query:(body)=>({
                url:REGISTER_URL,
                body:body,
                method:"POST"
            })
        }),
    })
})

export const {useLoginMutation, useSignupMutation} = userApiSlice

