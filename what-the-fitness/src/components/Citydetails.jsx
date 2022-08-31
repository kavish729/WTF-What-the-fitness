import React from "react";

const Citydetails = ({ add, item }) => {
  // console.log(add);
  return (
    <div>
      <p>Address:-{add.address1}</p>
      <p>{add.address2}</p>
    </div>
  );
};

export default Citydetails;
