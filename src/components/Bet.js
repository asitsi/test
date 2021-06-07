import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Bet = (props) => {
  const Id = props.match.params.bet;
  //   console.log(props);
  const [value, setvalue] = useState([]);
  const getData = async () => {
    const res = await fetch(
      "51.143.173.5/api/developer/matchapi.php?Action=multiMarket&MarketID=" +
        Id
    );
    const response = await res.json();
    setvalue(response);
    // console.log(response[0]);
  };
  useEffect(() => {
    getData();
  }, []);

  setInterval(getData, 2000);
  if (value === 0) {
  } else {
    return (
      <div>
        <ul>
          {value.map((currentElement, index) => {
            return (
              <li key={index} className="list_item">
                <p>
                  <h1>availableToBack</h1>
                  {currentElement.runners.map((item) => {
                    return (
                      <div className="items">
                        <div>
                          {item.ex.availableToBack.map((subitem) => {
                            return (
                              <div>
                                <p>price : {subitem.price}</p>
                                <p>size : {subitem.size}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </p>
                <p>
                  <h1>availableToLay</h1>
                  {currentElement.runners.map((item) => {
                    return (
                      <div className="items">
                        <div>
                          {item.ex.availableToLay.map((subitem) => {
                            return (
                              <div>
                                <p> price : {subitem.price}</p>
                                <p> size : {subitem.size}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default Bet;
