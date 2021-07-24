import { useState } from "react";
import getHighestPair from "../GetHighestPair";
import "../css/EmployeeInput.scss";

function EmployeeInput({ setPair }) {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();

  const ReadFile = (e) => {
    const inputFile = e.target.files[0];
    const fr = new FileReader();

    fr.onload = (e) => {
      if (e.target.result) {
        setFileName(inputFile.name);
        setFile(e.target.result);
      }
    };

    fr.readAsText(inputFile);
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className="EmployeeInput">
      <label for="file-upload">Upload employees file</label>
      <span>{fileName}</span>
      <input
        type="file"
        id="file-upload"
        accept=".txt, .csv"
        onChange={(e) => ReadFile(e)}
      />
      <button
        type="button"
        onClick={() =>
          setPair(
            getHighestPair(file?.split("\r\n").map((el) => el.split(",")))
          )
        }
      >
        Get Employee Pair
      </button>
    </form>
  );
}

export default EmployeeInput;
