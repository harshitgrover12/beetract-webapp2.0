import React from 'react';
import Table from './Table1';

const Task=()=>{
return(
<div className="container">
<div className="row justify-content-md-center ">
<div className="wow anim fadeInLeft" style={{width:'990px'}} >
<div className="item "style={{border:'1px solid grey',padding:'20px',}}  >

<Table/>

 
<div style={{height:'32px'}}>
<button className="button8"><i class="fa fa-plus-square" style={{marginRight:'10px'}}></i>Add Task</button>
</div>

<div style={{height:'32px'}}>
<button className="button6">Approve</button>
<button className="button7">Don't</button>
</div>


 </div>
</div>
</div>
</div>
        

)
}
export default Task;