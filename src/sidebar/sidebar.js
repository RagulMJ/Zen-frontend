import React from 'react'
import './sidebar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser, faFileLines, faFileCode, faClipboardQuestion} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


function Sidebar() {
    return (
        <nav className='main-menu'>
            <ul>
                <li className='logo-fixed'>
                    <div className=" d-flex align-items-center" style={{ width: 'fit-content', marginleft: '8px' }}>
                        <div>
                            <img src={require('../IMG/logo.png')} className='logo'/>
                        </div>
                        <h6 class="ml-3 d-inline-block mt-3 font-weight-bold">Student</h6>
                    </div>
                </li>
                <div className='list-scroll color-area'>
                    <li>
                        <span className='mx-4'>
                            <div className="span-area d-flex align-items-center cursor">
                                <Link style={{color:"#4b0dba", textDecoration:'none'}} to={'/class'}>
                                <span>
                                    <FontAwesomeIcon className='icon pl-4' icon={faUser}/>
                                </span>
                                <span className='ml-5'>Class</span>
                                </Link>
                            </div>
                        </span>
                    </li>
                </div>
                <div className='list-scroll color-area'>
                    <li>
                        <span className='mx-4'>
                            <div className="span-area d-flex align-items-center cursor">
                            <Link style={{color:"#4b0dba", textDecoration:'none'}} to={'/dashboard'}>
                                <span>
                                    <FontAwesomeIcon className='icon pl-4' icon={faFileLines}/>
                                </span>
                                <span className='ml-5'>Dashboard</span>
                            </Link>
                            </div>
                        </span>
                    </li>
                </div>
                <div className='list-scroll color-area'>
                    <li>
                        <span className='mx-4'>
                            <div className="span-area d-flex align-items-center cursor">
                            <Link style={{color:"#4b0dba", textDecoration:'none'}} to={'/task'}>
                                <span>
                                    <FontAwesomeIcon style={{color:"#4b0dba"}} className='icon pl-4' icon={faFileCode}/>
                                </span>
                                <span className='ml-5'>Tasks</span>
                            </Link>
                            </div>
                        </span>
                    </li>
                </div>
                <div className='list-scroll color-area'>
                    <li>
                        <span className='mx-4'>
                            <div className="span-area d-flex align-items-center cursor">
                            <Link style={{color:"#4b0dba", textDecoration:'none'}} to={'/hackathon'}>
                                <span>
                                    <FontAwesomeIcon style={{color:"#4b0dba"}} className='icon pl-4' icon={faFileCode}/>
                                </span>
                                <span className='ml-5'>Hackathon</span>
                            </Link>
                            </div>
                        </span>
                    </li>
                </div>
                <div className='list-scroll color-area'>
                    <li>
                        <span className='mx-4'>
                            <div className="span-area d-flex align-items-center cursor">
                                
                                <div>
                                    <FontAwesomeIcon style={{color:"#4b0dba"}} className='icon pl-4' icon={faFileCode}/>
                                </div>
                                <div className='ml-5'>Capstone</div>
                                
                            </div>
                        </span>
                    </li>
                </div>
                <div className='list-scroll color-area'>
                    <li>
                        <span className='mx-4'>
                            <div className="span-area d-flex align-items-center cursor">
                                
                                <div>
                                    <FontAwesomeIcon style={{color:"#4b0dba"}} className='icon pl-4' icon={faClipboardQuestion}/>
                                </div>
                                <div className='ml-5'>Query</div>
                                
                            </div>
                        </span>
                    </li>
                </div>
            </ul>
        </nav> 
  )
}

export default Sidebar