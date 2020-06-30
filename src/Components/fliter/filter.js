import React from 'react';
import './filter.css'
const Filter=()=>{
    return (
        <div className='filter'>
            <div id='filter-icon'>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-funnel-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
                </svg>
            </div>
            <div id='post-bid'>
                <button id='post-button'>Post</button>
                <button id='bid-button'>Bid</button>
            </div>
            <div id='project-dis'>
                Projects:<select><option>Project Name</option></select>
            </div>
            <div id=''>
                <select>
                    <option selected data-default>Status</option>
                    <option>Active</option>
                    <option>Running</option>
                    <option>Closed</option>
                </select>
            </div>
        </div>
    )
}

export default Filter;