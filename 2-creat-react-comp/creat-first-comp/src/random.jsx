function Random(){

  let number = Math.random()*100;
  return <h3 
  style={{'background-color':'#555555'}}>Random Number Is: 
  {Math.floor(number)}
  </h3>
}

export default Random;