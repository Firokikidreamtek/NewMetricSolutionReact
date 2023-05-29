import { countOfEmployees } from "../../../../../Helper";
import { firstSchemaOfDepartmentsProps } from "../../../../../Interfaces";



export default function RetailSalesDepartment(props: firstSchemaOfDepartmentsProps) {
  return (
    <>
      <li>
        <div className="stickyWithPointer" onClick={() => props.parentFunction()}>
        RetailSalesDepartment
            <br />
            {countOfEmployees(props.data)}
        </div>
      </li>
    </>
  );
}