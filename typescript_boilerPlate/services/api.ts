import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    prepareHeaders: (headers) => {
      // headers.set("Content-Type", "multipart/form-data");
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [],
});
export const {
  reducer: apiReducer,
  reducerPath: apiReducerPath,
  middleware: apiMiddleware,
  enhanceEndpoints,
  injectEndpoints,
  endpoints,
} = api;
