import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const accountingDepartmentApi = createApi({
  reducerPath: "accountingDepartmentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7181/api",
  }),
  endpoints: (builder) => ({
    accountingDepartment: builder.query({
      query: () => ({
        url: "AccountingDepartment",
      }),
    }),
    updateAccountingDepartment: builder.mutation({
      query: () => ({
        url: "AccountingDepartment",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useAccountingDepartmentQuery,
  useUpdateAccountingDepartmentMutation,
} = accountingDepartmentApi;
export default accountingDepartmentApi;
