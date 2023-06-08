import React from "react";
import cstyles from "./MenuContainer.module.css"
import MenuPages from "../MenuPages/MenuPages";

const MenuContainer = (props) => {
    return(
        <div className={cstyles.container}>
            <MenuPages render={props.render}/>
        </div>
    );
}

export default MenuContainer;