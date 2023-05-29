import React from "react";
import { CustomerServiceDepartment, ProductionDepartment, AccountingDepartment } from "../Components/Page/Home";

function Home() {
  return (
    <div>
      <div>
        <ul className="tree">
          <li>
            <CustomerServiceDepartment/>
          </li>
          <li>
          <ProductionDepartment/>
          </li>
          <li>
            <AccountingDepartment/>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
