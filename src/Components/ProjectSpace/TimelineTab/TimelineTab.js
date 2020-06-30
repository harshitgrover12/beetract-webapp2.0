import React from 'react';
import Timeline from './Timeline';

const TimelineTab=()=>{
return(
<div className="container">
<div className="row justify-content-md-center ">
<div className="wow anim fadeInLeft" style={{width:'990px'}} >
<div className="item "style={{border:'1px solid grey',padding:'20px',borderRadius:'15px'}}  >
<p style={{marginLeft:'10px'}}> if required,modify timeline and submit request.It needs to be agreed by the other end </p>

        <div className="container" style={{position:'relative',width:'950px'}} >
<div className="row justify-content-md-center ">
<div className="wow anim fadeInLeft" style={{width:'960px'}} >
<div className="item "style={{border:'1px solid grey',borderRadius:'15px'}}  >
<div style={{height:'32px'}}>
<p className="pstyle">Project Name</p>
<p className="pstyle1"> 15,00,000 INR(Part-payment)</p>
 </div>
 <div style={{height:'32px'}}>
<p className="pstyle"> Description</p>


<a className="pstyle1" style={{marginLeft:'480px',textDecoration:'underline'}}>View Details</a>

 </div>
 <div>
<h1 style={{display:'inline-block',fontSize:'14px',top:'75px',position:'absolute',marginLeft:'10px',fontWeight:'800',textTransform:'none'}}>% Work Completed</h1>

 <Timeline/>
 
 <h1 style={{display:'inline-block',fontSize:'14px',top:'115px',position:'absolute',marginLeft:'30px',fontWeight:'800',textTransform:'none'}}>Payment Done</h1>
 <Timeline/>
                    
</div>

<div style={{height:'32px'}}>
<button className="button5">Change Request</button>
</div>
<div style={{height:'32px'}}>
<button className="button6">Agree</button>
<button className="button7">Not Agree</button>
</div>




</div>
</div>
</div>
</div>
        </div>
        </div>
</div>
</div>

)
}
export default TimelineTab;