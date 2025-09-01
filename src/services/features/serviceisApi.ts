import type { Service, ServicesResponse } from "../../types/type";
import { baseApi } from "../baseApi";

export const servicesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query<ServicesResponse, void>({
      query: () => ({
        url: "/services",
        method: "GET",
      }),
    }),
    getByIdService: builder.query<Service, string>({
      query: (_id) => ({
        url: `/services/${_id}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllServicesQuery, useGetByIdServiceQuery } = servicesApi;
