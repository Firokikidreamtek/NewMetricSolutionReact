import { countOfEmployees } from "../../../../Helper";
import { firstSchemaOfDepartmentsProps } from "../../../../Interfaces";



export default function EngineeringDepartment(props: firstSchemaOfDepartmentsProps) {
  return (
    <>
      <li>
        <div className="sticky" onClick={() => props.parentFunction()}>
            EngineeringDepartment
            <br />
            {countOfEmployees(props.data)}
        </div>
      </li>
    </>
  );
}
