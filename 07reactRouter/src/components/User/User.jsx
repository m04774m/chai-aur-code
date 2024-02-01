import React from "react";
import { useParams } from "react-router-dom";
export default function User(){
    const {userid}= useParams()
    return(
        <h1 className=" bg-gray-700 text-white text-4xl m-20 py-20">User : {userid} </h1>
    )
}