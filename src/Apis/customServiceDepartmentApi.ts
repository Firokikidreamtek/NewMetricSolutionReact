import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const customServiceDepartmentApi = createApi({
  reducerPath: "customServiceDepartmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7181/api/customServiceDepartment",
  }),
  tagTypes: ["CustomServiceDepartment"],
  endpoints: (builder) => ({
    customServiceDepartment: builder.query({
      query: () => ({
        url: "",
      }),
      providesTags: ["CustomServiceDepartment"],
    }),
    logisticsDepartment: builder.query({
      query: () => ({
        url: "LogisticsDepartment",
      }),
    }),
    salesDepartment: builder.query({
      query: () => ({
        url: "SalesDepartment",
      }),
    }),
    updateLogisticsDepartment: builder.mutation({
      query: ({
        quantityOfEmployeesInDeliveryDepartment,
        quantityOfEmployeesInStorageDepartment
      }) => ({
        url: "LogisticsDepartment",
        method: "POST",
        params: {
          quantityOfEmployeesInDeliveryDepartment,
          quantityOfEmployeesInStorageDepartment,
        },
      }),
      invalidatesTags: ["CustomServiceDepartment"],
    }),
    updateSalesDepartment: builder.mutation({
      query: ({
        quantityOfEmployeesInRetailSalesDepartment,
        quantityOfEmployeesInWholesaleSalesDepartment
      }) => ({
        url: "SalesDepartment",
        method: "POST",
        params: {
          quantityOfEmployeesInRetailSalesDepartment,
          quantityOfEmployeesInWholesaleSalesDepartment,
        },
      }),
      invalidatesTags: ["CustomServiceDepartment"],
    }),
  }),
});

export const {
  useCustomServiceDepartmentQuery,
  useLogisticsDepartmentQuery,
  useSalesDepartmentQuery,
  useUpdateLogisticsDepartmentMutation,
  useUpdateSalesDepartmentMutation
} = customServiceDepartmentApi;
export default customServiceDepartmentApi;
