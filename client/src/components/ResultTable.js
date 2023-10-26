// import React, { useEffect, useState } from "react";
// import { getServerData } from "../helper/helper";

// export default function ResultTable() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     getServerData(`${process.env.PORT}/api/result`, (res) => {
//       setData(res);
//     });
//   });

//   return (
//     <div>
//       <table>
//         <thead className="table-header">
//           <tr className="table-row">
//             <td>Name</td>
//             <td>Attemps</td>
//             <td>Earn Points</td>
//             <td>Result</td>
//           </tr>
//         </thead>
//         <tbody>
//           {!data ?? <div>No Data Found </div>}
//           {data.map((v, i) => (
//             <tr className="table-body" key={i}>
//               <td>{v?.username || ""}</td>
//               <td>{v?.attempts || 0}</td>
//               <td>{v?.points || 0}</td>
//               <td>{v?.achived || ""}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

export default function ResultTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Use the correct environment variable, process.env.PORT is not typically used for API endpoints
    getServerData(`${process.env.REACT_APP_PORT}/api/result`, (res) => {
      setData(res);
      console.log(data);
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
        {/* <tbody>
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
        </tbody> */}
      </table>
    </div>
  );
}
