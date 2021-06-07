import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leagename = (props) => {
  const EventId = props.match.params.gamename;
  const Id = props.match.params.leageName;
  // console.log(props);
  const [data, setData] = useState([]);
  const getdata = async () => {
    const res = await fetch(
      "https://51.143.173.5/api/developer/matchapi.php?Action=listEvents&EventTypeID=" +
        EventId +
        "&CompetitionID=" +
        Id
    );
    const value = await res.json();
    setData(value);
    // console.log(value);
    // console.log(value[0]);
  };
  useEffect(() => {
    getdata();
  }, []);
  if (data === 0) {
    return (
      <div>
        <h1>NO DATA</h1>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          {data.map((currentElement, index) => {
            return (
              <li key={index}>
                <Link
                  to={"/" + EventId + "/" + Id + "/" + currentElement.event.id}
                >
                  <p>{currentElement.event.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Leagename;
