import React, { useState, useEffect } from "react";
import Papa from "papaparse";

import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import CsvInput from "./CsvInput";
import { CSVLink } from "react-csv";

function CSVInterface() {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data.length && columns.length) setLoading(false);
  }, [data, columns]);

  const handleFileChange = (file) => {
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: handleDataChange,
    });
  };

  const makeColumns = (rawColumns) => {
    return rawColumns.map((column) => {
      return { Header: column, accessor: column };
    });
  };

  const handleDataChange = (file) => {
    setData(file.data);
    setColumns(makeColumns(file.meta.fields));
  };
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  const styleObj = {
    width: "220px",
    height: "50px",
    border: "none",
    outline: "none",
    color: "#fff",
    background: "#111",
    cursor: "pointer",
    position: "relative",
    borderRadius: "10px",
    float: "right",
  };
  const linkStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "1em 1.5em",
    textDecoration: "none",
    textTransform: "uppercase",
  };
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center", fontSize: "40px", color: "purple" }}>
          Students
        </h1>
        <p style={{ textAlign: "center", fontSize: "25px", color: "black" }}>
          List of all the students in the database
        </p>
        <br />
        <br />
        <button style={styleObj} onClick={handleClick}>
          Logout
        </button>
        <br />
        <br />
        <CSVLink style={linkStyle} data={data}>
          EXPORT CSV FILE
        </CSVLink>
        <br />
        <br />
        <h2>IMPORT CSV FILE</h2>
        <CsvInput handleFileChange={handleFileChange} data={data} />
        {!loading && (
          <ReactTable
            data={data}
            columns={columns}
            // style={{ overflow: "wrap" }}
            style={{ whiteSpace: "unset" }}
            // defaultPageSize={10}
          />
        )}
      </div>
    </div>
  );
}

export default CSVInterface;
