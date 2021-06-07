import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch(
      "http://51.143.173.5/api/developer/matchapi.php?Action=listEventTypes"
    );
    const value = await res.json();
    setData(value);
    // console.log(value);
    // console.log(value[0]);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <ul>
        {data.map((currentElement, index) => {
          return (
            <li
              key={index}
              listid={currentElement.eventType.id}
              className="List"
            >
              <Link to={"/" + currentElement.eventType.id}>
                <p>{currentElement.eventType.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
