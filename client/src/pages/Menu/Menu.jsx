import React from "react";
import { Sidebar } from "./Sidebar";
import SearchBox from "./SearchBox";
import ItemCard from "./ItemCard";

const Menu = () => {
  return (
    <>
      <div className="flex gap-10">
        <div className=" w-[500px] flex flex-col items-end">
          <h1>KFC MENU</h1>
          <Sidebar/>
        </div>
        <div className="w-[1100px]">
          <SearchBox/>
          <ItemCard/>
        </div>
      </div>
    </>
  );
};

export default Menu;
