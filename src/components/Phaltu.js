import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Phaltu = (props) => {
  const Id = props.match.params.gamename;
  // console.log(Id);
  const [value, setvalue] = useState([]);
  const getData = async () => {
    const res = await fetch(
      "http://51.143.173.5/api/developer/matchapi.php?Action=listCompetitions&EventTypeID=" +
        Id
    );
    const response = await res.json();
    setvalue(response);
    // console.log(response);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <ul>
        {value.map((currentElement, index) => {
          return (
            <li key={index}>
              <Link to={"/" + Id + "/" + currentElement.competition.id}>
                <p>{currentElement.competition.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Phaltu;
