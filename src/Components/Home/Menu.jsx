import React, { useState } from "react";
import cstyles from "./Menu.module.css";
import MenuContainer from "../Utils/MenuContainer";

const Menu = () => {
  const [isActive, setIsActive] = useState([true,false,false]);
  let key;
  if(isActive[0]){
    key = 0;
  }
  if(isActive[1]){
    key = 1;
  }
  if(isActive[2]){
    key = 2;
  }
  return (
    <div className={cstyles.menu}>
      <div className={cstyles.menuText}>
        <div className={cstyles.menuT1}>OUR</div>
        <div className={cstyles.menuT2}>MENU</div>
      </div>
      <div className={cstyles.divider}></div>
      <div className={cstyles.menuDiv}>
        <ul>
          <li
            className={isActive[0] ? cstyles.active : ""}
            onClick={() => setIsActive([true,false,false])}
          >
            <span>PAGE 1</span>
          </li>
          <li
            className={isActive[1] ? cstyles.active : ""}
            onClick={() => setIsActive([false,true,false])}
          >
            <span>PAGE 2</span>
          </li>
          <li
            className={isActive[2] ? cstyles.active : ""}
            onClick={() => setIsActive([false,false,true])}
          >
            <span>OFFERS</span>
          </li>
        </ul>
      </div>
      <MenuContainer render={key}/>
    </div>
  );
};

export default Menu;
