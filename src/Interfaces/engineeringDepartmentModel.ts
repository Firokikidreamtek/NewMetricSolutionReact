import baseDepartmentModel  from "./baseDepartmentModel";

export interface engineeringDepartmentModel extends baseDepartmentModel {
    productionDepartmentId: number;
}