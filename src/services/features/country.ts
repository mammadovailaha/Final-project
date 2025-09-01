import type { CountriesResponse, Country } from "../../types/type";
import { baseApi } from "../baseApi";

export const countryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCountries: builder.query<CountriesResponse, void>({
      query: () => ({
        url: "/countries",
        method: "GET",
      }),
    }),
    getByIdCountry: builder.query<Country, string>({
      query: (id) => ({
        url: `/countries/${id}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllCountriesQuery, useGetByIdCountryQuery } = countryApi;
