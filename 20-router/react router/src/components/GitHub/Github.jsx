// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
export default function Github() {
  // const [data,setData]= useState([])
  // useEffect(() =>{
  //   fetch('https://api.github.com/users/rdmondal100')
  //   .then((res)=>res.json())
  //   .then((res)=>setData(res))

  // },[])
const data = useLoaderData()
  console.log(data)
  return (
    <>
    <div className=" text-center m-4 bg-cyan-800 text-white 
    text-4xl p-4">{data?data.bio:"Data not found"} </div>
    <img src={data?data.avatar_url:null} alt="github img" className=" w-32 flex justify-items-center" />
    </>
  )
}


export const githubInfoLoader = async ()=>{
 const response= await fetch('https://api.github.com/users/rdmonda100')

 return response.json();

}