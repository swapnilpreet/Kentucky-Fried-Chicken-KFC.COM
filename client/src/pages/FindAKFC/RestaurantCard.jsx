import React from 'react'
import styled from 'styled-components'
import {TiTickOutline} from "react-icons/ti"

const RestaurantCardStyling = styled.div`
.cardStylingMainDiv{
    height:fit-content;
    line-height:0.7;
    width:90%; 
    padding:10px;
    margin:10px;
    margin:auto;
}
.cardStylingMainDiv:hover{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
h1{
    font-size:35px;
    font-weight:400;
    font-Family:fantasy;
}
h3{
    color:#db343b;
}
h3:hover{
    text-decoration:none;
}
.optionsCWD{
    display:flex;
    text-align:center;
    margin:auto;
    justify-content:center;
    gap:5%;
}
.cardUnderlineHower:hover{
    text-decoration:none;
    cursor:pointer;
}
`
const RestaurantCard = ({data}) => {
    // console.log(title,time,address,contact,catering,wifi,delivery)
    // console.log(data)
    return (
        <div className='overflow-auto h-[625px] flex flex-col items-center'>
        {data.restaurantDetails.map((item)=>(
            <div className='w-[80%] mt-10 shadow-xl p-5 rounded-lg  bg-gray-100'>
                     <h1><u>{item.title}</u></h1>
                     <h4>{`Open Now: Closes at ${item.time}`}</h4>
                <p>{item.address}</p>
                <p>{item.contact}</p>

                <div className='flex flex-col items-center '>
                    <div className='flex items-center'>
                    {item.catering && 
                    <>
                     <TiTickOutline size={33} color='red'/> 
                     <p>Catering</p>
                    </>}
                    </div>

                    <div className='flex items-center'>
                    {item.wifi && 
                    <>
                     <TiTickOutline size={33} color='red'/> 
                     <p>WiFi</p>
                    </>}
                    </div>

                    <div className='flex items-center'>
                    {item.delivery && 
                    <>
                     <TiTickOutline size={33} color='red'/> 
                     <p>Delivery</p>
                    </>}
                    </div>
                </div>


                <div className='mt-3 underline'>
                <h3 className="">GET DIRECTIONS</h3>
                <h3 className="mt-2">DELIVERY</h3>
                </div>
            </div>
        ))}
            {/* <div className='border-solid'>
                <h1><u>{title}</u></h1>
                <h4>{`Open Now: Closes at ${time}`}</h4>
                <p>{address}</p>
                <p>{contact}</p>
                <div className='optionsCWD'>
                    {catering && <p><img height={"25rem"} style={{ padding: "0vw 0vw", cursor: "pointer" }} className="cardUnderlineHower" src={tick} alt="" />Catering</p>}
                    {wifi && <p><img height={"25rem"} style={{ padding: "0vw 0vw", cursor: "pointer" }} className="cardUnderlineHower" src={tick} alt="" />WiFi</p>}
                    {delivery && <p><img height={"25rem"} style={{ padding: "0vw 0vw", cursor: "pointer" }} className="cardUnderlineHower" src={tick} alt="" />Delivery</p>}
                </div>
                <h3 className="cardUnderlineHower"><u className="cardUnderlineHower">GET DIRECTIONS</u></h3>
                <h3 className="cardUnderlineHower"><u className="cardUnderlineHower">DELIVERY</u></h3>
            </div> */}
        </div>
    )
}

export default RestaurantCard