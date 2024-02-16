/* eslint-disable react/prop-types */
const ErrorMessage = ({itm}) => {

  // if(itm.length==0){
  //   return <h2>I am still Hungry.....</h2>
  // }
  // let EmptyMessage =
  //   itm.length == 0 ? <h2>I am still Hungry.....</h2> : null;
  return (
    <>
      {/* {EmptyMessage} */}
      {itm.length === 0 && <h2>I am still Hungry.....</h2>}
    </>
  );
};

export default ErrorMessage;
