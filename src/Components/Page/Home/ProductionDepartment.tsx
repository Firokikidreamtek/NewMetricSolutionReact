import React, { useEffect, useRef, useState } from "react";
import { useProductionDepartmentQuery, useUpdateProductionDepartmentMutation } from "../../../Apis/productionDepartmentApi";
import EngineeringDepartment from "./ProductionDepartment/EngineeringDepartment";
import PurchasingDepartment from "./ProductionDepartment/PurchasingDepartment";
import QualityControlDepartment from "./ProductionDepartment/QualityControlDepartment";
import { countOfEmployees } from "../../../Helper";



function ProductionDepartment() {
  const { data, isLoading } = useProductionDepartmentQuery(null);
  const [updateProductionDepartment] = useUpdateProductionDepartmentMutation();
    
    const [employeesOfProductionDepartment, setEmployeesOfProductionDepartment] = useState(0);
    const [employeesOfEngineeringDepartment, setEmployeesOfEngineeringDepartment] = useState(0);
    const [employeesOfPurchasingDepartment, setEmployeesOfPurchasingDepartment] = useState(0);
    const [employeesOfQualityControlDepartment, setEmployeesOfQualityControlDepartment] = useState(0);

    useEffect(() => {
      if (!isLoading)
      {
        setEmployeesOfProductionDepartment(data.result.employees);
        setEmployeesOfEngineeringDepartment(data.result.engineeringDepartment.employees);
        setEmployeesOfPurchasingDepartment(data.result.purchasingDepartment.employees);
        setEmployeesOfQualityControlDepartment(data.result.qualityControlDepartment.employees);
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
          let newQuantity = employeesOfProductionDepartment + 1;
          setEmployeesOfProductionDepartment(newQuantity);
          updateProductionDepartment({
            quantityOfEmployeesInEngineeringDepartment:employeesOfEngineeringDepartment,
            quantityOfEmployeesInPurchasingDepartment:employeesOfPurchasingDepartment,
            quantityOfEmployeesQualityControlDepartment:employeesOfQualityControlDepartment
          })
        }
      }
     }, [employeesOfEngineeringDepartment,employeesOfPurchasingDepartment,employeesOfQualityControlDepartment]);
  

  
  const engineeringDepartmentFunction = () => {
    let newQuantity = employeesOfEngineeringDepartment + 1;
    if (newQuantity === 0) {
      newQuantity = 1;
    }
    setEmployeesOfEngineeringDepartment(newQuantity);
  }
  const qualityControlDepartmentFunction = () => {
    let newQuantity = employeesOfQualityControlDepartment + 1;
    if (newQuantity === 0) {
      newQuantity = 1;
    }
    setEmployeesOfQualityControlDepartment(newQuantity);
  }
  
  const purchasingDepartmentFunction = () => {
    let newQuantity = employeesOfPurchasingDepartment + 1;
    if (newQuantity === 0) {
      newQuantity = 1;
    }
    setEmployeesOfPurchasingDepartment(newQuantity);
  }
    return (
      <>
    {!isLoading && (
      <>
        <div className="sticky">
          ProductionDepartment
          <br />
          {countOfEmployees(employeesOfProductionDepartment)}
        </div>
        <ul>
          <EngineeringDepartment parentFunction={engineeringDepartmentFunction} 
          data={employeesOfEngineeringDepartment}/>
          <PurchasingDepartment parentFunction={purchasingDepartmentFunction} 
          data={employeesOfPurchasingDepartment}/>
          <QualityControlDepartment parentFunction={qualityControlDepartmentFunction} 
          data={employeesOfQualityControlDepartment}/>
        </ul>
      </>
      )}
    </>
  );
}

export default ProductionDepartment;
