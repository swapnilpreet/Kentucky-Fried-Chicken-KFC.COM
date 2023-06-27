import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
const [searchval,setSearchval]= useState("");
const navigate= useNavigate();
  return (
    <div className=' flex justify-end items-end p-2'>
     
       <input type="text"
       className='w-80 h-8 rounded-lg text-lg' 
       value={searchval} 
       placeholder="Search Our Menu"
       onChange={(e)=>setSearchval(e.target.value)}
       onKeyUp={(e)=>{
        if(e.code==='Enter'){
            localStorage.setItem("search",searchval);
            navigate("/search")
        }
       }}
       />

    </div>
  )
}

export default SearchBox