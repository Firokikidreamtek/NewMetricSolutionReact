import { countOfEmployees } from "../../../../Helper";
import { firstSchemaOfDepartmentsProps } from "../../../../Interfaces";



export default function PurchasingDepartment(props: firstSchemaOfDepartmentsProps) {
  return (
    <>
      <li>
        <div className="sticky" onClick={() => props.parentFunction()}>
        PurchasingDepartment
            <br />
            {countOfEmployees(props.data)}
        </div>
      </li>
    </>
  );
}
