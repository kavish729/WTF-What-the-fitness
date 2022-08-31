import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import SingleGym from "./SingleGym";
import { Scrollbars } from "react-custom-scrollbars-2";
const Gymbycity = () => {
  const [gym, setgym] = useState([]);
  const [filtercity, setfiltercity] = useState([]);

  const getData = () => {
    axios
      .get("https://api.wtfup.me/gym/places")
      .then((r) => setgym(r.data.data));
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setfiltercity(gym);
  }, [gym]);

  const handleChange = (e) => {
    let value = e.target.value;
    //console.log(value);
    if (value == "All") {
      getData();
    } else {
      const updatedgym = gym.filter((item) => {
        return item.city == value;
      });
      setfiltercity(updatedgym);
    }
    console.log(value);
  };

  return (
    <div id="main_container">
      <div id="sorting_container">
        <select id="select_city" onChange={handleChange}>
          <option value="All">Filter by city</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Ghaziabad">Ghaziabad</option>
          <option value="Noida">Noida</option>
          <option value="Delhi">Delhi</option>
        </select>
      </div>
      <div id="gym_data">
        
          {filtercity?.map((item, index) => {
            return <SingleGym item={item} key={index} />;
          })}
       
      </div>
    </div>
  );
};

export default Gymbycity;
