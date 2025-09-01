import type { Partner } from "../../types/type";
import { baseApi } from "../baseApi";

export const partnersApi=baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllPartners:builder.query<Partner[],void>({
            query:()=>({
                url:"/partners",
                method:"GET",
            })
        })
    })
})
export const {useGetAllPartnersQuery}=partnersApi;