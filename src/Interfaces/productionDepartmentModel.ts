import { engineeringDepartmentModel } from "./engineeringDepartmentModel";
import { purchasingDepartmentModel } from "./purchasingDepartmentModel";
import { qualityControlDepartmentModel } from "./qualityControlDepartmentModel";
import baseDepartmentModel  from "./baseDepartmentModel";

export interface productionDepartmentModel extends baseDepartmentModel {
    engineeringDepartment?: engineeringDepartmentModel;
    purchasingDepartment?: purchasingDepartmentModel;
    qualityControlDepartment?: qualityControlDepartmentModel;
}