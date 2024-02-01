import React, { useEffect, useState } from "react";
import {useLoaderData} from 'react-router-dom'

export default function Github(){
    const data = useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/m04774m')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[])

   
    return(
        <>
            <div className="grid grid-flow-col  justify-center content-center gap-4 bg-gray-700 text-white text-4xl m-5 py-5">
               <div className="mt-20 mr-10">Github Followers : {data.followers + 126}</div> 
            <img  className=" w-1/2 rounded-full" src={data.avatar_url} alt="" /></div>
        </>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/m04774m')
    return response.json()
}