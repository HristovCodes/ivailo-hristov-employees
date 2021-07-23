import { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState("");
  const [pair, setPair] = useState();

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
          setPair(getHighestPair(file.split("\r\n").map((el) => el.split(","))))
        }
      >
        Get Employee Pair
      </button>
      <span className="datarow">
        <p>Employee ID #1</p>
        <p>Employee ID #2</p>
        <p>Project ID</p>
        <p>Days Worked</p>
      </span>
      {pair ? <DataRow key={pair[0][1]} data={pair}></DataRow> : ""}
    </div>
  );
}

function DataRow({ data }) {
  return (
    <span className="datarow">
      <p>{data[0][0]}</p>
      <p>{data[1][0]}</p>
      <p>{data[0][1]}</p>
      <p>{data[2]}</p>
    </span>
  );
}

const getHighestPair = (empl) => {
  let pair = [];
  let highestDiff = 0;

  empl.forEach((el1) => {
    empl.slice(empl.indexOf(el1) + 1, empl.length).forEach((el2) => {
      const startDate1 = new Date(el1[2]);
      const endDate1 = new Date(el1[3]);
      const startDate2 = new Date(el2[2]);
      const endDate2 = new Date(el2[3]);
      if (startDate2 >= startDate1 && el1[1] === el2[1]) {
        const end = endDate1 <= endDate2 ? endDate1 : endDate2;
        if (end >= startDate2) {
          const diffTime = Math.abs(end - startDate2);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          if (highestDiff <= diffDays) {
            highestDiff = diffDays;
            pair = [el1, el2, diffDays];
          }
        }
      }
    });
  });
  console.log(pair);
  return pair;
};

export default App;
