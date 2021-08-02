import "../css/EmployeeTable.scss";
import DataRow from "./DataRow";

function EmployeeTable({ pair }) {
  return (
    <div className="EmployeeTable">
      <DataRow
        data={["Employee ID #1", "Employee ID #2", "Project ID", "Days Worked"]}
      ></DataRow>
      {pair.team?.map((p) => (
        <DataRow key={pair.team.indexOf(p)} data={p}></DataRow>
      ))}
    </div>
  );
}

export default EmployeeTable;
