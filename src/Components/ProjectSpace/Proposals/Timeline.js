import React from 'react';
import './Timeline.css'
 const Timeline=()=>{
     return(
<div id="timeline-wrap">
  <div id="timeline" />
  {/* This is the individual marker*/}<h1 style={{display:'inline-block',fontSize:'18px',top:'-30px',position:'absolute',marginLeft:'10px',fontWeight:'800'}}>%</h1>
  <div className="marker mfirst timeline-icon one">
  0
  </div>
  {/* / marker */}
  {/* This is the individual marker*/}
  <div className="marker m2 timeline-icon two">
    25
  </div>
  {/* / marker */}
  {/* This is the individual panel*/}
  
  {/* / panel */}
  {/* This is the individual marker*/}
  <div className="marker m3 timeline-icon three">
    50
  </div>
  {/* / marker */}
  {/* This is the individual marker*/}
  <div className="marker mlast timeline-icon four">
   75
  </div>
   <div className="marker mlast1 timeline-icon four">
   100
  </div>
  {/* / marker */}
</div>

     )
 }
 export default Timeline;