import React from "react";
import Citydetails from "../Citydetails";

const SingleGym = ({ item }) => {
  //console.log(item);
  return (
    <div>
      <h1>city Name:- {item.city}</h1>
      {item.addressComponent?.map((add, index) => {
        return <Citydetails add={add} item={item} key={index} />;
      })}
    </div>
  );
};

export default SingleGym;
