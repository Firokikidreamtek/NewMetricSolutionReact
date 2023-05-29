import { configureStore } from "@reduxjs/toolkit";
import {
  productionDepartmentApi,
  customServiceDepartmentApi,
  accountingDepartmentApi
} from "../../Apis";

const store = configureStore({
  reducer: {
    [productionDepartmentApi.reducerPath]:productionDepartmentApi.reducer,
    [customServiceDepartmentApi.reducerPath]:customServiceDepartmentApi.reducer,
    [accountingDepartmentApi.reducerPath]:accountingDepartmentApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(productionDepartmentApi.middleware)
    .concat(customServiceDepartmentApi.middleware)
    .concat(accountingDepartmentApi.middleware),

});

export type RootState = ReturnType<typeof store.getState>;

export default store;