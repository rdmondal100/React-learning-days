const Loading=()=>{

  return <center className="mt-5">
<div className="spinner-border text-warning fs-3 " style={{width:" 4rem", height:"4rem"}} role="status">
  <span className="visually-hidden">Loading...</span>

<div className="spinner-grow text-success fs-2 fw-bolder"  style={{width:" 3rem", height: "3rem"}} role="status">
  <span className="visually-hidden">Loading...</span>
</div>
</div>
<span className="fach-data" role="status">Faching data...</span>

</center>
}

export default Loading;