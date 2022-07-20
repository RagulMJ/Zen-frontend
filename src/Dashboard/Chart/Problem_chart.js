import React, { useState } from 'react'
import './problem_chart.css'
import moment from "moment";

function Problem_chart(props) {
    const current = new Date()
    const day = current.getDay()
    let weekday = []
    switch (day) {
        case 0:
            weekday = ['MON','TUE','WED','THR','FRI','SAT','SUN']
            break;
        case 1:
            weekday = ['TUE','WED','THR','FRI','SAT','SUN','MON']
            break;
        case 2:
            weekday = ['WED','THR','FRI','SAT','SUN','MON','TUE']
            break;
        case 3:
            weekday = ['THR','FRI','SAT','SUN','MON','TUE','WED']
            break;
        case 4:
            weekday = ['FRI','SAT','SUN','MON','TUE','WED','THR']
            break;
        case 5:
            weekday = ['SAT','SUN','MON','TUE','WED','THR','FRI']
            break;
        case 6:
            weekday = ['SUN','MON','TUE','WED','THR','FRI','SAT']
            break;
        default:
            break;
    }
    const [ctdate,setCtdate] = useState(new Date())
    
   
   function left(){
       setCtdate(moment(ctdate, "DD-MM-YYYY").subtract(7, "days"))
    
   } 
   
   function right(){
    setCtdate(moment(ctdate, "DD-MM-YYYY").add(7, "days"));
    
   }


    return (
        
            <div className='col-md-4'>
                <div className='mt-10'>
                    <div className='card-new cards-body-border-new'>
                        <div className='Chart_header_space_between'>
                            <div className='Chart_topic'>
                                {props.data.name}
                            </div>
                            <div className='Chart_points'>
                                <span className='Chart_points_header'>Today :
                                    <span className='Chart_points_display'>
                                        {props.data.point}
                                        </span>
                                </span>
                                <span className='Chart_points_header'>Total :
                                    <span className='Chart_points_display'>
                                        {props.data.Total}
                                        </span>
                                </span>
                            </div>
                        </div>
                        <svg width="400" height="200">
                            <g className="axis x" transform="translate(30, 170)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle">
                                <path className="domain" stroke="currentColor" d="M0,6V0H370V6">
                                </path>
                                <g className="tick" opacity="1" transform="translate(38.94736842105264,0)">
                                    <line stroke="currentColor" y2="6">
                                    </line>
                                    <text fill="currentColor" y="9" dy="0.71em">
                                        {weekday[0]}
                                    </text>
                                </g>
                                <g className="tick" opacity="1" transform="translate(87.63157894736841,0)">
                                    <line stroke="currentColor" y2="6">
                                    </line>
                                    <text fill="currentColor" y="9" dy="0.71em">
                                        {weekday[1]}
                                    </text>
                                </g>
                                <g className="tick" opacity="1" transform="translate(136.31578947368422,0)">
                                    <line stroke="currentColor" y2="6">
                                    </line>
                                    <text fill="currentColor" y="9" dy="0.71em">
                                        {weekday[2]}
                                    </text>
                                </g>
                                <g className="tick" opacity="1" transform="translate(185,0)">
                                    <line stroke="currentColor" y2="6">
                                    </line>
                                    <text fill="currentColor" y="9" dy="0.71em">
                                        {weekday[3]}
                                    </text>
                                </g>
                                <g className="tick" opacity="1" transform="translate(233.68421052631578,0)">
                                    <line stroke="currentColor" y2="6">
                                    </line>
                                    <text fill="currentColor" y="9" dy="0.71em">
                                        {weekday[4]}
                                    </text>
                                </g>
                                <g className="tick" opacity="1" transform="translate(282.3684210526316,0)">
                                    <line stroke="currentColor" y2="6">
                                    </line>
                                    <text fill="currentColor" y="9" dy="0.71em">
                                        {weekday[5]}
                                    </text>
                                </g>
                                <g className="tick" opacity="1" transform="translate(331.0526315789474,0)">
                                    <line stroke="currentColor" y2="6">
                                    </line>
                                    <text fill="currentColor" y="9" dy="0.71em">
                                        {weekday[6]}
                                    </text>
                                </g>
                            </g>
                            <g transform="translate(30, 20)">
                                <g transform="translate(29.21052631578948, 75)">
                                    <rect width="19.473684210526315" height="75" fill="#B182FF">
                                    </rect>
                                    <rect width="19.473684210526315" height="75" fill="#FFBEBE">
                                    </rect>
                                    <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">
                                        0.00
                                    </text>
                                </g>
                                <g transform="translate(77.89473684210526, 75)">
                                    <rect width="19.473684210526315" height="75" fill="#B182FF">
                                    </rect>
                                    <rect width="19.473684210526315" height="75" fill="#FFBEBE">
                                    </rect>
                                    <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">
                                        0.00
                                    </text>
                                </g>
                                <g transform="translate(126.57894736842105, 75)">
                                    <rect width="19.473684210526315" height="75" fill="#B182FF">
                                    </rect>
                                    <rect width="19.473684210526315" height="75" fill="#FFBEBE">
                                    </rect>
                                    <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">
                                        0.00
                                    </text>
                                </g>
                                <g transform="translate(175.26315789473685, 75)">
                                    <rect width="19.473684210526315" height="75" fill="#B182FF">
                                    </rect>
                                    <rect width="19.473684210526315" height="75" fill="#FFBEBE">
                                    </rect>
                                    <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">
                                        0.00
                                    </text>
                                </g>
                                <g transform="translate(223.94736842105263, 75)"><rect width="19.473684210526315" height="75" fill="#B182FF">
                                </rect>
                                    <rect width="19.473684210526315" height="75" fill="#FFBEBE">
                                    </rect>
                                    <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">
                                        0.00
                                    </text>
                                </g>
                                <g transform="translate(272.63157894736844, 75)">
                                    <rect width="19.473684210526315" height="75" fill="#B182FF">
                                    </rect>
                                    <rect width="19.473684210526315" height="75" fill="#FFBEBE">
                                    </rect>
                                    <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">
                                        0.00
                                    </text>
                                </g>
                                <g transform="translate(321.3157894736842, 75)">
                                    <rect width="19.473684210526315" height="75" fill="#B182FF">
                                    </rect>
                                    <rect width="19.473684210526315" height="75" fill="#FFBEBE">
                                    </rect>
                                    <text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">
                                        0.00
                                    </text>
                                </g>
                            </g>
                        </svg>
                        <div className="Dashboard_space__between__2IYmU">
                            <div className="" style={{cursor: "pointer"}}>
                                <img className="p-2 arrow" src="https://www.zenclass.in/Icons/backwardArrow.svg" alt="add/plus" onClick={left}/>
                            </div>
                            <div className="">
                            {`${moment(ctdate, "DD/MM/YYYY")
                        .subtract(6, "days")
                        .format("DD/MM/YYYY")} - ${moment(
                        ctdate
                      ).format("DD/MM/YYYY")}`}
                                {/* {date} - {date} */}
                                {/* {first} - {last} */}
                            </div>
                            <div className="" style={{cursor: "pointer"}}>
                                <img className="p-2 arrow" src="https://www.zenclass.in/Icons/forwardArrow.svg" alt="add/plus" onClick={right} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Problem_chart