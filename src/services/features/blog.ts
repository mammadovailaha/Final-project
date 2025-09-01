import type { Blog, BlogsResponse } from "../../types/type";
import { baseApi } from "../baseApi";


export const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query<Blog[], void>({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
      // Transform response to extract array from whatever structure your API returns
      transformResponse: (response: BlogsResponse): Blog[] => {
        // Adjust this based on your actual API response structure
        return response.data || response.blogs || (Array.isArray(response) ? response : []);
      },
      // Add proper tags for cache management
      providesTags: ["books"],
    }),
    getByIdBlog: builder.query<Blog, number>({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, id) => [{ type: "books", id }],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllBlogsQuery, useGetByIdBlogQuery } = blogApi;