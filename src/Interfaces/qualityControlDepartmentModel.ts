import baseDepartmentModel from "./baseDepartmentModel";

export interface qualityControlDepartmentModel extends baseDepartmentModel {
    productionDepartmentId: number;
}