import React, { useState, useEffect } from "react";
import "./People.css";
import { baseUrl, API_KEY, imageUrl } from "../../constants/constants";
import axios from "../../axios";

const baseURL = baseUrl + "/person/";
var peopleAPI = `?api_key=${API_KEY}`;

function EachPerson(props) {
  const [people, setPeople] = useState({});
  useEffect(() => {
    axios.get(baseURL + props.id + peopleAPI).then((res) => {
      setPeople(res.data);
    });
  }, []);

  console.log(people);
  return (
    <>
      <div className="img-name-container">
        <img src={imageUrl + people.profile_path} />
        <p>{people.name}</p>
      </div>
    </>
  );
}

export { EachPerson };
