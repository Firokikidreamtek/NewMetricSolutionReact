import { useEffect, useRef, useState } from "react";
import { useSalesDepartmentQuery, useUpdateSalesDepartmentMutation } from "../../../../Apis/customServiceDepartmentApi";
import {WholesaleSalesDepartment, RetailSalesDepartment} from ".";



export default function SalesDepartment() {
  const { data, isLoading } = useSalesDepartmentQuery(null);
  const [updateSalesDepartment] = useUpdateSalesDepartmentMutation();
    const [employeesOfWholesaleSalesDepartment, setEmployeesOfWholesaleSalesDepartment] = useState(0);
    const [employeesOfRetailSalesDepartment, setEmployeesOfRetailSalesDepartment] = useState(0);
    const [employeesOfSalesDepartment, setEmployeesOfSalesDepartment] = useState(0);

    useEffect(() => {
      if (!isLoading)
      {
        setEmployeesOfSalesDepartment(data.result.employees);
        setEmployeesOfRetailSalesDepartment(data.result.retailSalesDepartment.employees);
        setEmployeesOfWholesaleSalesDepartment(data.result.wholesaleSalesDepartment.employees);
      }
      
    }, [isLoading, data]);
    
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
          let newQuantity = employeesOfSalesDepartment + 1;
          setEmployeesOfSalesDepartment(newQuantity);
          updateSalesDepartment({
            quantityOfEmployeesInRetailSalesDepartment:employeesOfWholesaleSalesDepartment,
            quantityOfEmployeesInWholesaleSalesDepartment:employeesOfRetailSalesDepartment,
          })
        }
      }
     }, [employeesOfRetailSalesDepartment,employeesOfWholesaleSalesDepartment]);
  

  
  const retailSalesDepartmentFunction = () => {
    let newQuantity = employeesOfRetailSalesDepartment + 1;
    setEmployeesOfRetailSalesDepartment(newQuantity);
  }
  const wholesaleSalesDepartmentFunction = () => {
    let newQuantity = employeesOfWholesaleSalesDepartment + 1;
    setEmployeesOfWholesaleSalesDepartment(newQuantity);
  }
  return (
    <>
      {!isLoading && (
        <>
          <li>
            <div className="sticky">
              SalesDepartment
              <br />
              {employeesOfSalesDepartment} Сотрудников
            </div>
            <ul>
              <WholesaleSalesDepartment
                parentFunction={wholesaleSalesDepartmentFunction}
                data={employeesOfWholesaleSalesDepartment}
              />
              <RetailSalesDepartment
                parentFunction={retailSalesDepartmentFunction}
                data={employeesOfRetailSalesDepartment}
              />
            </ul>
          </li>
        </>
      )}
    </>
  );
}
