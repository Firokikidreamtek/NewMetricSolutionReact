import React, { useEffect, useRef, useState } from "react";
import { useAccountingDepartmentQuery, useUpdateAccountingDepartmentMutation } from "../../../Apis/accountingDepartmentApi";
import { countOfEmployees } from "../../../Helper";



function AccountingDepartment() {
  const { data, isLoading } = useAccountingDepartmentQuery(null);
  const [updateAccountingDepartment] = useUpdateAccountingDepartmentMutation();
    
    const [employeesOfAccountingDepartment, setEmployeesOfAccountingDepartment] = useState(0);

    useEffect(() => {
      if (!isLoading)
      {
        setEmployeesOfAccountingDepartment(data.result.employees);
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
          updateAccountingDepartment(null);
        }
      }
     }, [employeesOfAccountingDepartment]);
  
     const raiseQuantityOfEmployeesInAccountingDepartment = () => {
      let newQuantity = employeesOfAccountingDepartment + 1;
      setEmployeesOfAccountingDepartment(newQuantity);
    }
  
    return (
      <>
    {!isLoading && (
      <>
        <div className="stickyWithPointer" onClick={raiseQuantityOfEmployeesInAccountingDepartment}>
          AccountingDepartment
          <br />
          {countOfEmployees(employeesOfAccountingDepartment)}
        </div>
      </>
      )}
    </>
  );
}

export default AccountingDepartment;
