import React, { useEffect, useRef, useState } from "react";
import LogisticsDepartment from "./CustomServiceDepartment/LogisticsDepartment";
import { useCustomServiceDepartmentQuery } from "../../../Apis/customServiceDepartmentApi";
import SalesDepartment from "./CustomServiceDepartment/SalesDepartment";
import { countOfEmployees } from "../../../Helper";



function CustomerServiceDepartment() {
  const { data, isLoading } = useCustomServiceDepartmentQuery(null);
    
    const [employeesOfCustomerServiceDepartment, setEmployeesOfCustomerServiceDepartment] = useState(0);

    useEffect(() => {
      if (!isLoading)
      {
        setEmployeesOfCustomerServiceDepartment(data.result.employees);
      }
      
    }, [data]);

    return (
      <>
    {!isLoading && (
      <>
        <div className="sticky">
        CustomerServiceDepartment
          <br />
          {countOfEmployees(employeesOfCustomerServiceDepartment)}
        </div>
        <ul>
          <LogisticsDepartment/>
          <SalesDepartment/> 
        </ul>
      </>
      )}
    </>
  );
}

export default CustomerServiceDepartment;
