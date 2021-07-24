import { useState } from "react";
import "../css/Employee.scss";
import EmployeeInput from "./EmployeeInput";
import EmployeeTable from "./EmployeeTable";

function Employee() {
  const [pair, setPair] = useState([]);

  return (
    <div className="Employee">
      <EmployeeInput setPair={setPair}></EmployeeInput>
      <EmployeeTable pair={pair}></EmployeeTable>
    </div>
  );
}

export default Employee;
