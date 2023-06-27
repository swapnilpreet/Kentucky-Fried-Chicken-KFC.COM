import React from "react";
import data from "./dipping.json";
const DippingSauce = () => {
  return (
    <>
      <div>
        {data.sause.map((item) => (
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-4 items-center">
              <div className=" w-20 h-20  ">
                <img src={item.image} className="w-full" alt="img" />
              </div>
              <div>
                <h4>{item.name}</h4>
                <p className="text-gray-500">{item.calories}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DippingSauce;
