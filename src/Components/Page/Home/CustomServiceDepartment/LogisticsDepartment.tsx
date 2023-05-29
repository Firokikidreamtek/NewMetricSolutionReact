import { useEffect, useRef, useState } from "react";
import { DeliveryDepartment, StorageDepartment } from ".";
import { useLogisticsDepartmentQuery, useUpdateLogisticsDepartmentMutation } from "../../../../Apis/customServiceDepartmentApi";



export default function LogisticsDepartment() {
  const { data, isLoading } = useLogisticsDepartmentQuery(null);
  const [updateLogisticsDepartment] = useUpdateLogisticsDepartmentMutation();
    const [employeesOfDeliveryDepartment, setEmployeesOfDeliveryDepartment] = useState(0);
    const [employeesOfStorageDepartment, setEmployeesOfStorageDepartment] = useState(0);
    const [employeesOfLogisticsDepartment, setEmployeesOfLogisticsDepartment] = useState(0);

    useEffect(() => {
      if (!isLoading)
      {
        setEmployeesOfLogisticsDepartment(data.result.employees);
        setEmployeesOfStorageDepartment(data.result.storageDepartment.employees);
        setEmployeesOfDeliveryDepartment(data.result.deliveryDepartment.employees);
      }
      
    }, [data]);
    
    const firstUpdate = useRef(true);
    useEffect(() => {
      if (!isLoading)
      {
        if(firstUpdate.current)
        {
          firstUpdate.current = false;
          return;
        }
        else{
          let newQuantity = employeesOfLogisticsDepartment + 1;
          setEmployeesOfLogisticsDepartment(newQuantity);
          updateLogisticsDepartment({
            quantityOfEmployeesInDeliveryDepartment:employeesOfDeliveryDepartment,
            quantityOfEmployeesInStorageDepartment:employeesOfStorageDepartment,
          })
        }
      }
     }, [employeesOfStorageDepartment,employeesOfDeliveryDepartment]);
  

  
  const storageDepartmentFunction = () => {
    let newQuantity = employeesOfStorageDepartment + 1;
    setEmployeesOfStorageDepartment(newQuantity);
  }
  const deliveryDepartmentFunction = () => {
    let newQuantity = employeesOfDeliveryDepartment + 1;
    setEmployeesOfDeliveryDepartment(newQuantity);
  }
  
  return (
    <>
      {!isLoading && (
        <>
          <li>
            <div className="sticky">
              LogisticsDepartment
              <br />
              {employeesOfLogisticsDepartment} Сотрудников
            </div>
            <ul>
              <DeliveryDepartment
                parentFunction={deliveryDepartmentFunction}
                data={employeesOfDeliveryDepartment}
              />
              <StorageDepartment
                parentFunction={storageDepartmentFunction}
                data={employeesOfStorageDepartment}
              />
            </ul>
          </li>
        </>
      )}
    </>
  );
}
