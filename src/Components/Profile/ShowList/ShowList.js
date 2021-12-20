import React from "react";
import { useCallback, useEffect, useState } from "react";

import classes from "./ShowList.scss";

const ShowList = () => {
  const [inviteeList, setInviteeList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  console.log("start");

  const fetchingData = useCallback(() => {
    setLoading(true);
    console.log("else statement");
    const url =
      "https://weddingproject2-ce55f-default-rtdb.firebaseio.com/list.json";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("failed to fetch");
          throw new Error("failed to fetch error");
        }
      })
      .then((databaseList) => {
        console.log("fetched data");
        console.log("databaseList ", databaseList);
        if (!databaseList) throw new Error("The list is empty");

        const myList = databaseList[Object.keys(databaseList)[0]];
        console.log(myList);
        // console.log("results ", databaseList.results);

        setInviteeList(myList);
        console.log("myList ", myList);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log("Loadinggg ", loading);
        console.log("No List available ", error.message);
        setError(error.message);
      });
  }, [setInviteeList]);

  useEffect(() => {
    fetchingData();
  }, [setError, setInviteeList, fetchingData]);

  const value = "";
  console.log("value ", !value);
  console.log(inviteeList);

  const table = (
    <div class="container">
      <div class="table">
        <div class="table-header">
          <div class="header__item">
            <a id="name" class="filter__link" href="#">
              Name
            </a>
          </div>
          <div class="header__item">
            <a id="wins" class="filter__link filter__link--number" href="#">
              Attend
            </a>
          </div>
          <div class="header__item">
            <a id="draws" class="filter__link filter__link--number" href="#">
              Time
            </a>
          </div>
          <div class="header__item">
            <a id="losses" class="filter__link filter__link--number" href="#">
              Losses
            </a>
          </div>
          <div class="header__item">
            <a id="total" class="filter__link filter__link--number" href="#">
              Total
            </a>
          </div>
        </div>
        <div class="table-content">
          {inviteeList.map((person) => (
            <div class="table-row">
              <div class="table-data">{person.name}</div>
              <div class="table-data">
                {!person.attend ? "-" : person.attend}
              </div>
              <div class="table-data">{!person.date ? "-" : person.date}</div>
              <div class="table-data">1</div>
              <div class="table-data">5</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  console.log("loading, ", loading);

  return (
    <React.Fragment>
      {
        inviteeList.length !== 0 && !loading && table
        // <table>
        //   <tbody>
        //     <tr>
        //       <th>Name</th>
        //       <th>Attend</th>
        //       <th>Time</th>
        //     </tr>
        //     {inviteeList.length !== 0 &&
        // inviteeList.map((person) => (
        //   <tr>
        //     <td>{person.name} </td>
        //     <td>{!person.attend ? "-" : person.attend} </td>
        //     <td>{!person.date ? "-" : person.date} </td>
        //   </tr>
        //       ))}
        //   </tbody>
        // </table>
      }
      {inviteeList.length === 0 && !loading && (
        <h2 style={{ textAlign: "center", color: "white" }}>{error}</h2>
      )}
      {loading && (
        <h2 style={{ textAlign: "center", color: "white" }}>Getting List</h2>
      )}
    </React.Fragment>

    /* <ul>
       {inviteeList.length !== 0 &&
         inviteeList.map((person) => <li key={person.id}>{person.name}</li>)}
       {error && <p>{error}</p>}
     </ul> */
  );
};

export default ShowList;
