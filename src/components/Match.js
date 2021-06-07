import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Match = (props) => {
  const EventId = props.match.params.gamename;
  const Id = props.match.params.matchname;
  console.log(props);
  const [value, setvalue] = useState([]);
  const getData = async () => {
    const res = await fetch(
      "https://51.143.173.5/api/developer/matchapi.php?Action=listMarketTypes&EventID=" +
        Id +
        "&sportId=" +
        EventId
    );
    const response = await res.json();
    setvalue(response);
    console.log(response);
  };
  useEffect(() => {
    getData();
  }, []);
  if (value == 0) {
    return (
      <div>
        <h1>NO DATA</h1>
      </div>
    );
  } else {
    return (
      <div>
        <ul>
          {value.map((currentElement, index) => {
            return (
              <li key={index}>
                <Link
                  to={
                    "/" +
                    EventId +
                    "/" +
                    Id +
                    "/" +
                    currentElement.event.id +
                    "/" +
                    currentElement.marketId
                  }
                >
                  <p>{currentElement.marketName}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Match;
