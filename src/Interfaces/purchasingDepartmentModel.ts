import  baseDepartmentModel from "./baseDepartmentModel";

export interface purchasingDepartmentModel extends baseDepartmentModel {
    productionDepartmentId: number;
}