import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

export default function ResultTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Use the correct environment variable, process.env.REACT_APP_PORT is typically used for React apps
    getServerData(`${process.env.REACT_APP_PORT}/api/result`, (res) => {
      // Ensure that res is an array before setting it in the state
      if (Array.isArray(res)) {
        setData(res);
      }
    });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earned Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="4">No Data Found</td>
            </tr>
          ) : (
            data.map((v, i) => (
              <tr className="table-body" key={i}>
                <td>{v.username || ""}</td>
                <td>{v.attempts || 0}</td>
                <td>{v.points || 0}</td>
                <td>{v.achieved || ""}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
