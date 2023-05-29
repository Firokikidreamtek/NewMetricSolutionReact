import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productionDepartmentApi = createApi({
  reducerPath: "productionDepartmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7181/api",
  }),
  endpoints: (builder) => ({
    productionDepartment: builder.query({
      query: () => ({
        url: "ProductionDepartment",
      }),
    }),
    updateProductionDepartment: builder.mutation({
      query: ({
        quantityOfEmployeesInEngineeringDepartment,
        quantityOfEmployeesInPurchasingDepartment,
        quantityOfEmployeesQualityControlDepartment
      }) => ({
        url: "ProductionDepartment",
        method: "POST",
        params: {
          quantityOfEmployeesInEngineeringDepartment,
          quantityOfEmployeesInPurchasingDepartment,
          quantityOfEmployeesQualityControlDepartment
        },
      }),
    }),
  }),
});

export const {
  useProductionDepartmentQuery,
  useUpdateProductionDepartmentMutation,
} = productionDepartmentApi;
export default productionDepartmentApi;
