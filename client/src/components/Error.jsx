import React from "react";
import { TbFaceIdError } from "react-icons/tb";
const Error = ({ value }) => {
  return (
    <div>
      <div className="flex flex-col m-24 items-center justify-center">
        <TbFaceIdError size={500} />
      <h3 >{value}</h3>
      </div>
    </div>
  );
};

export default Error;
