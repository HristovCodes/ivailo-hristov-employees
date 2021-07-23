import { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState("");
  const [employees, setEmployees] = useState();

  const ReadFile = (e) => {
    const inputFile = e.target.files[0];
    const fr = new FileReader();

    fr.onload = (e) => {
      setFile(e.target.result);
    };

    fr.readAsText(inputFile);
  };

  return (
    <div className="">
      <input type="file" onChange={(e) => ReadFile(e)} />
      <button
        onClick={() =>
          setEmployees(file.split("\r\n").map((el) => el.split(",")))
        }
      >
        Load Data Into The Table
      </button>
      <button>
        Get Employee pair with highest collaboration time on same project
      </button>
      {employees
        ? employees.map((empl) => (
            <EmployeeRow key={empl[0]} data={empl}></EmployeeRow>
          ))
        : ""}
    </div>
  );
}

function EmployeeRow({ data }) {
  console.log(data);
  return (
    <span className="datarow">
      <p>{data[0]}</p>
      <p>{data[1]}</p>
      <p>{data[2]}</p>
      <p>{data[3]}</p>
    </span>
  );
}

export default App;
