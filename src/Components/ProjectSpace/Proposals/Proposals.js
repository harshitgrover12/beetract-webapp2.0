import React from 'react';
import Timeline from './Timeline';
const Proposals=()=>{
return(
<div className="container">
<div className="row justify-content-md-center ">
<div className="wow anim fadeInLeft" style={{width:'990px'}} >
<div className="item "style={{border:'1px solid grey',padding:'20px',}}  >

 <select id="action" name="actions" style={{width:'170px',height:'30px'}} className="selecto1" >
        <option id="allproposals"> All Proposals</option>
        </select>

        <div className="container" style={{position:'relative',width:'950px'}} >
<div className="row justify-content-md-center ">
<div className="wow anim fadeInLeft" style={{width:'960px'}} >
<div className="item "style={{border:'1px solid grey'}}  >
<div style={{height:'32px'}}>
<p className="pstyle"> Name</p>


<p className="pstyle1"> 45000 INR</p>

 <button className="button3"style={{top:'6px'}}>Shortlist</button>
 </div>
 <div style={{height:'32px'}}>
<p className="pstyle"> Skill Tags</p>


<p className="pstyle1" style={{marginLeft:'440px'}}> Summary</p>

 <button className="button3" style={{left:'245px',top:'5px'}}>Accept</button>
 </div>


 <div style={{top:'-30px'}}>
<p className="pstyle"> Timeline<span style={{fontSize:'10px'}}>(date and perentage of work expected to be completed)</span></p>


<p className="pstyle2" >Payment Type-<span style={{fontSize:'10px'}}>part payment</span></p>

 <button className="button4" style={{top:'5px'}}>Reject</button>
 </div>
 <Timeline/>
                    

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
export default Proposals;