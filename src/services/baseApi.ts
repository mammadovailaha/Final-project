import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Backend API linkini yazırıq (artıq /api əlavə olunub)
const BASE_URL = "https://finalprojectbackend-lgwa.onrender.com/api";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
  // hər sorğu üçün cache bypass
  fetchFn: (input, init) => {
    init = init || {};
    init.cache = "no-cache";
    return fetch(input, init);
  },
});


// Base API yaradılması
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery, // sadəcə bunu istifadə edirik
  tagTypes: [
    "service",
    "books",
    "faq",
    "ticket",
    // lazım olduqca əlavə et
  ],
  endpoints: () => ({}), // burda endpointlər inject olunacaq
});
