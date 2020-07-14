import React, { useEffect,useState } from 'react'
import Nav from '../nav/nav'
import Dash from '../dashboard/dash'
import './dashb.css'
import { Line, Bar } from 'react-chartjs-2'
import ReactApexChart from 'react-apexcharts'
import grp_icon from './group.svg'
import pro_icon from './work (1).svg'
import rupee_icon from './rupee.svg'


let projects=[]
const Dashboard=()=>{
    const [d, setd] = useState([])
    const [total, settotal] = useState(0)
    let f=[]
    useEffect(()=>{
        for(var i=0;i<15;i++){
            let r=Math.floor(Math.random()*100000)+100000
            f.push({Name:`${i+1}`,value: r})
            settotal(total+r)
        }
        setd(f)
    },[])
    
    const sample_project=[
        {
            Name:"Projects Posted",
            value:15
        },
        {
            Name:"Projects Completed",
            value:7
        },
        {
            Name:"Ongoing Projects",
            value:2
        },
        {
            Name:"Freelancers Worked",
            value:27
        },
        {
            Name:"Prelancers Worked",
            value:5
        }
    ]   

    const sample_bid=[
        {
            Name:"Bids Placed",
            value:10
        },
        {
            Name:"Bids Won",
            value:5
        },
        {
            Name:"Ongoing Projects",
            value:2
        },
        {
            Name:"Clients Worked",
            value:15
        },
        {
            Name:"Completed Projects",
            value:7
        }
    ]

    const data={
        labels: d.map(i=>{
            return i.Name
        }),
        datasets: [
          {
            label:"Amount per Project",
            backgroundColor: 'rgba(165,33,93,0.5)',
            borderColor: 'rgba(165,33,93,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(165,33,93,0.7)',
            hoverBorderColor: 'rgba(165,33,93,1)',
            data: d.map(i=>{
                return i.value
            })
          }
        ]
      }
    
    const sample_finance={
        projects
    }
    const state={
        series: function (val) {
            return [val]
          },
          options: function (val) {
            return{
            labels:[val],
              chart: {
                height: 350,
                type: 'radialBar',
              },
              plotOptions: {
                    radialBar: {
                         hollow: {
                            size: '60%',
                        },
                    },
                }
            }
        },
            
          
    }

    console.log(d);
    return(
        <div className='dash-page'>
            <Nav/>
            <Dash/>
            <div className='Dashboard-Main'>
                {/* <div className='Dash-options'></div> */}
                <div className='Project_Details'>                    
                </div>
                
                <div className='overall'>
                    <div id='overall-projects'>
                        {sample_project.map((i,n)=>{
                            if(n<3){
                            return (
                                <div id='project-id' key={n}>
                                    <span style={{fontSize:'17px'}}>{i.Name}</span>
                                    <ReactApexChart
                                        options={state.options(i.value)} 
                                        series={state.series(((i.value/sample_project[0].value)*100).toFixed(0))} 
                                        type="radialBar" 
                                        height={150}
                                    />
                                </div>
                            )}
                            else{
                                return (
                                    <div id='project-id' key={n}>
                                        <span style={{fontSize:'17px'}}>{i.Name}</span>
                                        <img src={grp_icon} height='50px' width='50px' style={{marginTop:'30px'}}/>
                                        <span style={{fontSize:'20px'}}>{i.value}</span>
                                    </div>
                                ) 
                            }
                        })}
                    </div>
                    <div id='overall-bids'>
                        {sample_bid.map((i,n)=>{
                            if(n<3){
                                return (
                                    <div id='bid-id' key={n}>
                                        <span>{i.Name}</span>
                                        <ReactApexChart
                                        options={state.options(i.value)} 
                                        series={state.series(((i.value/sample_bid[0].value)*100).toFixed(0))} 
                                        type="radialBar" 
                                        height={150}
                                    />
                                    </div>
                                )}
                            if(n==4){
                                return(
                                    <div id='bid-id' key={n}>
                                        <span>{i.Name}</span>
                                        <img src={pro_icon} height='50px' width='40px' style={{marginTop:'30px'}}/>
                                        <span style={{fontSize:'20px'}}>{i.value}</span>
                                    </div>
                                )
                            }
                            else{
                                return(
                                    <div id='bid-id' key={n}>
                                        <span>{i.Name}</span>
                                        <img src={grp_icon} height='50px' width='50px' style={{marginTop:'30px'}}/>
                                        <span style={{fontSize:'20px'}}>{i.value}</span>
                                    </div>
                                )
                            }
                            })}
                    </div>
                </div>
                <div className='finance'>
                            <div id='finance-graph' style={{width:'600px'}}>
                                <div id='graph-cover'>
                                <Bar
                                    data={data}
                                    options={{
                                        scales: {
                                            yAxes: [{
                                                ticks: {
                                                    beginAtZero: true
                                                },gridLines: {
                                                    display:true
                                                }
                                            }],
                                            xAxes: [{
                                                ticks: {
                                                    beginAtZero: true
                                                },gridLines: {
                                                    display:false
                                                }
                                            }]
                                        }
                                    }}          
                                />
                            </div>
                            </div>
                            <div id='finance-details'>
                                <span style={{fontSize:'20px'}}>Overview:</span>
                                <div id='finance-details-body'>
                                    <div><span style={{fontSize:'17px'}}>Total Amount:</span> <img src={rupee_icon} height='50px' width='40px' style={{marginTop:'30px'}} /><span>{total}</span>
                                    </div>
                                    <div><span style={{fontSize:'17px'}}>Total Workers:</span><img src={grp_icon} height='50px' width='40px' style={{marginTop:'30px'}} /><span>22</span></div>
                                    <div><span style={{fontSize:'17px'}}>Total Projects:</span><img src={pro_icon} height='50px' width='40px' style={{marginTop:'30px'}} /><span>15</span></div>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;