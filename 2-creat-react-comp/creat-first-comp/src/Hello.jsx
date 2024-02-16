function Hello(){

  let myName = 'Riday Mondal';
  let devRole = ()=>{
    return "Junior Developer";
  }

  return <p>
    Hello  this is future of React.My name is {myName} and I want to be a {devRole()} in near future.
  </p>
}

export default Hello;