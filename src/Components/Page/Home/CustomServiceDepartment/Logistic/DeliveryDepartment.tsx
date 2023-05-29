import { countOfEmployees } from "../../../../../Helper";
import { firstSchemaOfDepartmentsProps } from "../../../../../Interfaces";



export default function DeliveryDepartment(props: firstSchemaOfDepartmentsProps) {
  return (
    <>
      <li>
        <div className="stickyWithPointer" onClick={() => props.parentFunction()}>
        DeliveryDepartment
            <br />
            {countOfEmployees(props.data)}
        </div>
      </li>
    </>
  );
}