import { countOfEmployees } from "../../../../Helper";
import { firstSchemaOfDepartmentsProps } from "../../../../Interfaces";



export default function QualityControlDepartment(props: firstSchemaOfDepartmentsProps) {
  return (
    <>
      <li>
        <div className="sticky" onClick={() => props.parentFunction()}>
        QualityControlDepartment
            <br />
            {countOfEmployees(props.data)}
        </div>
      </li>
    </>
  );
}
