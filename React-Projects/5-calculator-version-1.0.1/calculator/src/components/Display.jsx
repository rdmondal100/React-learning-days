/* eslint-disable react/prop-types */

import style from "./Display.module.css";
const Display=({showExpression})=>{


  return <input id={style['display']} type="text" value={showExpression} readOnly></input>

}

export default Display;