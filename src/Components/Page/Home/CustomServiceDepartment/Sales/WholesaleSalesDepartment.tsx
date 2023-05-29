import { countOfEmployees } from "../../../../../Helper";
import { firstSchemaOfDepartmentsProps } from "../../../../../Interfaces";



export default function WholesaleSalesDepartment(props: firstSchemaOfDepartmentsProps) {
  return (
    <>
      <li>
        <div className="stickyWithPointer" onClick={() => props.parentFunction()}>
        WholesaleSalesDepartment
            <br />
            {countOfEmployees(props.data)}
        </div>
      </li>
    </>
  );
}