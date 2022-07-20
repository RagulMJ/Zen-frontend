import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css'
import Problem_chart from './Chart/Problem_chart';
import Task_chart from './Chart/Task_chart';
import { useHistory } from 'react-router-dom';


function Dashboard() {
    const history = useHistory()
    const chartData = [{
        name: "Codekata",
        point: '0',
        Total: '1430'
    },
    {
        name: "Webkata",
        point: '0',
        Total: '4684'
    }
    ]
    const classes = () => {
        history.push('/class')
    }

    return (
        <div className='Body-box'>
            <div className='Body-wrapper'>
                <div className="Body-content-full">
                    <div className='d-flex'>
                        <div className='col-md-8'>
                            <div className='mt-10'>
                                <div className='Overview-card-header'>Overview</div>
                                <div className='card-ovr cards-body-border-ovr'>
                                    <div className='m-4 p-4'>
                                        <div className="d-flex justify-content-between Dashboard_sub_header">
                                            <span>Completion</span>
                                            <span>100%/100%</span>
                                        </div>
                                        <div className="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ "background-color": "rgb(75, 13, 186)", "width": "100%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 '>
                            <div className='mt-10'>
                                <div className='Overview-card-header'>Attendance</div>
                                <div className='card-sec cards-body-border-sec'>
                                    <div className='d-flex justify-content-center mt-1'>
                                        <span className='Dashboard-attendence-number'>0</span>
                                        <span className='Dashboard-attendence-percentage'>%</span>
                                    </div>
                                    <div className='m-2 Dashboard-go-to-classes' onClick={classes}>
                                        <span className='Dashboard-go-to-classes-font'>go to classes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ml-3 ">Activities</div>
                    <div className='d-flex'>
                        {chartData.map((ele) => {
                            return (
                                <Problem_chart data={ele} />
                            )
                        })}
                    </div>
                    <div className='d-flex'>
                        <Task_chart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard