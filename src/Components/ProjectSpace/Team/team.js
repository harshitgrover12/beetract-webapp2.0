import  React from 'react';
import './team.css'

const Team=()=>{

    let data=[{
        Name:'Abvgy',
        Email:'abc@gmail.com',
        Contact:99999999,
        Role:'Designer',
        Experience:'3 years',
        Key_Skills:'Creative'
    }]

    return(
        <div className='team wow anim fadeInLeft' >
            <div id='team-table'>
                <table>
                    <tr>
                        <td><span id='member-title'>Name</span></td>
                        <td><span id='member-title'>Contact</span></td>
                        <td><span id='member-title'>Email</span></td>
                        <td><span id='member-title'>Role</span></td>
                        <td><span id='member-title'>Experience</span></td>
                        <td><span id='member-title'>Key Skills</span></td>
                        <td><span id='mem-options'>Options</span></td>
                    </tr>
                        {data.map(i=>{
                            return(
                                <tr className='member-details'>
                                    <td><span id='member-detail-span'>{i.Name}</span></td>
                                    <td><span id='member-detail-span'>{i.Contact}</span></td>
                                    <td><span id='member-detail-span'>{i.Email}</span></td>
                                    <td><span id='member-detail-span'>{i.Role}</span></td>
                                    <td><span id='member-detail-span'>{i.Experience}</span></td>
                                    <td><span id='member-detail-span'>{i.Key_Skills}</span></td>
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
export default Team;