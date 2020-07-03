
import  React from 'react';
import './Approvals.css'

const Approvals=()=>{

    let data=[{
        RequestId:'Abvgy',
        Date:'abc@gmail.com',
        Type:99999999,
        RequestedBy:'Designer',
        Approver:'3 years',
        Project:'Creative',
        ReqItem:'1',
        ReqVal:'2',
    }]

    return(
        <div className='team wow anim fadeInLeft'>
            <div id='team-table'>
                <table>
                    <tr>
                        <td><span id='member-title1'>Request Id</span></td>
                        <td><span id='member-title1'>Date</span></td>
                        <td><span id='member-title1'>Type</span></td>
                        <td><span id='member-title1'>Requested By</span></td>
                        <td><span id='member-title1'>Approver</span></td>
                        <td><span id='member-title1'>Project</span></td>
                         <td><span id='member-title1'>Req. Item</span></td>
                        <td><span id='member-title1'>Req. Value</span></td>
                        
                    </tr>
                        {data.map(i=>{
                            return(
                                <tr className='member-details'>
                                    <td><span id='member-detail-span'>{i.RequestId}</span></td>
                                    <td><span id='member-detail-span'>{i.Date}</span></td>
                                    <td><span id='member-detail-span'>{i.Type}</span></td>
                                    <td><span id='member-detail-span'>{i.RequestedBy}</span></td>
                                    <td><span id='member-detail-span'>{i.Approver}</span></td>
                                    <td><span id='member-detail-span'>{i.Project}</span></td>
                                    <td><span id='member-detail-span'>{i.ReqItem}</span></td>
                                    <td><span id='member-detail-span'>{i.ReqVal}</span></td>
                                    <td>
                                        <span id='member-detail-span'>
                                            <span><i class="fa fa-trash" aria-hidden="true"></i></span>
                                            <span id='tik'><i class="fa fa-check" aria-hidden="true"></i></span>
                                            <span>Approved</span>
                                        </span>
                                    </td>
                                </tr>
                            )
                        })}
                </table>
                <div id='add-new'>
                    <div id='add-new-container'>
                        <button>+</button>
                        <span>Add Member</span>
                    </div>
                    <div id='add-new-buttons'>
                    <button id='mem-approved'>Approved</button>
                    <button id='mem-dontapproved'>Don't Approved</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Approvals;