import React from 'react'
import classes from './Fade.module.css'
function Fade({text1,text2}) {
  return (
   
       <div className={classes.outerSec}>
          <h2 className={classes.fadeInDownShort}>{ text1}</h2>
          <h2 className={classes.fadeInUpShort}>{ text2}</h2>
            </div>
  )
}

export default Fade;
