import { countOfEmployees } from "../../../../../Helper";
import { firstSchemaOfDepartmentsProps } from "../../../../../Interfaces";



export default function StorageDepartment(props: firstSchemaOfDepartmentsProps) {
  return (
    <>
      <li>
        <div className="stickyWithPointer" onClick={() => props.parentFunction()}>
        StorageDepartment
            <br />
            {countOfEmployees(props.data)}
        </div>
      </li>
    </>
  );
}