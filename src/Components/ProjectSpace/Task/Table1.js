import React from 'react';
import Table from 'react-bootstrap/Table';


const Table1=()=>{
    return(

        <Table >
  <thead>
    <tr>

      <th style={{color:'#a4215d'}}>Responsible Person</th>
      <th style={{color:'#a4215d'}}>Milestone</th>
      <th style={{color:'#a4215d'}}>Task</th>
      <th style={{color:'#a4215d'}}>Status</th>
      <th style={{color:'#a4215d'}}>Due Date</th>
      

    </tr>
  </thead>
  <tbody>
    <tr>
     
      <td>Hello</td>
      <td><select id="action" name="actions" style={{width:'170px',height:'30px',margin:'0px'}} className="selecto1" >
        <option id="m1">M1</option>
        <option id="m2">M2</option>
        <option id="m3">M3</option>
        <option id="m4">M4</option>
        </select></td>
      <td>mdo</td>
      <td><select id="action" name="actions" style={{width:'170px',height:'30px',margin:'0px'}} className="selecto1" >
        <option id="status1">Completed</option>
        <option id="status2">Work in progress</option>
        <option id="status3">Not Completed</option>
        
        </select></td>
      <td>mdo</td>
      <button className="button3"style={{top:'8px',left:'32px',height:'25px'}}>Commit</button>

    </tr>
    <tr>
      
      <td>Otto</td>
      <td><select id="action" name="actions" style={{width:'170px',height:'30px',margin:'0px'}} className="selecto1" >
      <option id="m1">M1</option>
        <option id="m2">M2</option>
        <option id="m3">M3</option>
        <option id="m4">M4</option>
        </select></td>
      <td>@fat</td>
      <td><select id="action" name="actions" style={{width:'170px',height:'30px',margin:'0px'}} className="selecto1" >
      <option id="status1">Completed</option>
        <option id="status2">Work in progress</option>
        <option id="status3">Not Completed</option>
        </select></td>
      <td>Thornton</td>
      <button className="button3"style={{top:'8px',left:'32px',height:'25px'}}>Commit</button>
    </tr>


    <tr>
      <td>Larry</td>
      <td><select id="action" name="actions" style={{width:'170px',height:'30px',margin:'0px'}} className="selecto1" >
      <option id="m1">M1</option>
        <option id="m2">M2</option>
        <option id="m3">M3</option>
        <option id="m4">M4</option>
        </select></td>
      <td>@twitter</td>
      <td><select id="action" name="actions" style={{width:'170px',height:'30px',margin:'0px'}} className="selecto1" >
      <option id="status1">Completed</option>
        <option id="status2">Work in progress</option>
        <option id="status3">Not Completed</option>
        </select></td>
      <td>Thornton</td>
      <button className="button3"style={{top:'8px',left:'32px',height:'25px'}}>Commit</button>
    </tr>
  </tbody>
</Table>
    )
}

export default Table1;
