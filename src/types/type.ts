// Service interface - frontend üçün
export interface Service {
  _id?: string;  // MongoDB-də _id istifadə olunur
  title: string;
  description?: string;  // backend-də required deyil
  url?: string;          // backend-də required deyil
  createdAt?: Date;      // timestamps: true səbəbindən
  updatedAt?: Date;      // timestamps: true səbəbindən
}

// API Response tipləri


export interface ServicesResponse {
  success: boolean;
  data: Service[];
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Service yaradılması üçün (id və timestamps olmadan)
export interface CreateServiceDto {
  title: string;
  description?: string;
  url?: string;
}

// Service yenilənməsi üçün (hamısı optional)
export interface UpdateServiceDto {
  title?: string;
  description?: string;
  url?: string;
}
export interface Country {
  _id:number;
  title: string;
  image: string;
  universityLogos: string[];
  __v: number;
}
export type CountriesResponse = Country[];


export interface Blog {
  id: number;
  url: string;
  title: string;
  description: string;
}

export interface BlogsResponse {
  data?: Blog[];
  blogs?: Blog[];

}
export interface Partner {
    id: number;
    alt: string;
    img: string;
}