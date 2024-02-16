import Loading from "./Loading";

// eslint-disable-next-line react/prop-types
const WelcomeMessage = ({getPostBtnClicked,getpostLoading}) => {
console.log(getpostLoading)
  return <>
  <div className="welcome_message">There are no post☹️
  <button className="btn btn-warning" onClick={getPostBtnClicked}>Get Posts { getpostLoading && <Loading></Loading>}  </button>
  </div>
  </>;
};

export default WelcomeMessage;
