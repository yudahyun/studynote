import React from "react";
import myScssMod from "../assect/scss/style.module.scss";

const ScssModule =()=>{
    return (
        <div>
        <h2>
            ScssModule
        </h2>
     <div className={myScssMod.myScss}>
            <div className={[myScssMod.myScssBox , myScssMod.red].join(" ")}>red</div>
            <div className={[myScssMod.myScssBox , myScssMod.green].join(" ")}>green</div>
            <div className={[myScssMod.myScssBox , myScssMod.blue].join(" ")}>blue</div>
            <div className={[myScssMod.myScssBox , myScssMod.yellow].join(" ")}>yellow</div>
            <div className={[myScssMod.myScssBox , myScssMod.orange].join(" ")}>orange</div>
            <div className={[myScssMod.myScssBox , myScssMod.pink].join(" ")}>pink</div>
     </div>
    </div>
    )
}
export default ScssModule;