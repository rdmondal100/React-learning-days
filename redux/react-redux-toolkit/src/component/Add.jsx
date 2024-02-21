import { useRef } from "react"
import { useDispatch } from "react-redux"
import { counterAction } from "../store"

const Add = () => {

  const dispatch=useDispatch()
  const inputelement=useRef()


  const handleEnterKey=(event)=>{
    if(event.key==='Enter')
    handleAdd()
  }
  const handleAdd=()=>{
   const num=inputelement.current.value;
  //  console.log(num)
  //  dispatch({payload:{num:num},type:"ADD"})


   dispatch(counterAction.add({num:num}))

   inputelement.current.value=""

   
  }
  return (
    <div className='flex justify-center items-center relative top-44 text-6xl gap-8 w-auto'><input
    ref={inputelement} 
    onKeyDown={handleEnterKey}
    type="number" 
     className=' text-orange-600 text-3xl h-20 font-semibold pl-2 focus:outline-none rounded-lg w-28 bg-slate-900'/><button  onClick={handleAdd}  className=' bg-lime-500 w-auto h-20 p-2  font-medium rounded-md text-zinc-900'>Add</button></div>
  )
}

export default Add