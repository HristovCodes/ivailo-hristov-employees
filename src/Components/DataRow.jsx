import "../css/DataRow.scss";

export default function DataRow({ data }) {
  return (
    <span className="DataRow">
      <p>{data[0]}</p>
      <p>{data[1]}</p>
      <p>{data[2]}</p>
      <p>{data[3]}</p>
    </span>
  );
}
