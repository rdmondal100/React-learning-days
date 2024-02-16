import { useParams } from "react-router-dom";
function User() {
  const { userid } = useParams();
  return <div className=" text-center bg-slate-700 text-cyan-400 text-4xl d-block m-auto w-80 ">User:{userid}</div>;
}

export default User;
