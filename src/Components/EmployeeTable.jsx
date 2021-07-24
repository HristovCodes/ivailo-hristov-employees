import "../css/EmployeeTable.scss";
import DataRow from "./DataRow";

function EmployeeTable({ pair }) {
  return (
    <div className="EmployeeTable">
      <DataRow
        data={["Employee ID #1", "Employee ID #2", "Project ID", "Days Worked"]}
      ></DataRow>
      <DataRow data={pair}></DataRow>
    </div>
  );
}

export default EmployeeTable;
