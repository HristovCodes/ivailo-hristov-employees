import "../css/DataRow.scss";

export default function DataRow(data) {
  const temp = data.data;
  return (
    <span className="DataRow">
      <p>{temp[0]}</p>
      <p>{temp[1]}</p>
      <p>{temp[2]}</p>
      <p>{temp[3]}</p>
    </span>
  );
}
