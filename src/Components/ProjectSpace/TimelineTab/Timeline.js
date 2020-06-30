import React from 'react';

 const Timeline=()=>{
     return(
<div id="timeline-wrap">
  <div id="timeline" style={{width:'60%',marginLeft:'180px'}}/>
  {/* This is the individual marker*/}
  <div className="marker mfirst timeline-icon one" style={{marginLeft:'180px'}}>
  0
  </div>
  {/* / marker */}
  {/* This is the individual marker*/}
  <div className="marker m2 timeline-icon two"style={{marginLeft:'180px'}}>
    25
  </div>
  {/* / marker */}
  {/* This is the individual panel*/}
  
  {/* / panel */}
  {/* This is the individual marker*/}
  <div className="marker m3 timeline-icon three"style={{marginLeft:'180px'}}>
    50
  </div>
  {/* / marker */}
  {/* This is the individual marker*/}
  <div className="marker mlast timeline-icon four"style={{marginLeft:'180px'}}>
   75
  </div>
   <div className="marker mlast1 timeline-icon four"style={{marginLeft:'180px'}}>
   100
  </div>
  {/* / marker */}
</div>

     )
 }
 export default Timeline;