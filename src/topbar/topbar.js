import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Redirect,useHistory,useParams } from 'react-router-dom'
import "./topbar.css"

function Topbar() {
    let history = useHistory()
    let params = useParams()
    const [isActive, setActive] = useState(false)
    const [user,setUserdata] = useState()

    function dropshow() {
        setActive(pre => !pre)
    }

    useEffect(() => {
    setUserdata(localStorage.getItem("UserName"))    
    
    }, [])
    console.log(user)

    const profilePage = () => {
        history.push('/profile')
    }

    const logout = () => {
        localStorage.clear()
        history.push('/login')
    }

    return (
        <nav className='header-cont flex-y'>
            <h1 className='heading'>Class</h1>
            <div className="lastContents" style={{ display: "flex", flexdirection: "row", aligncontent: "center" }}>
                <h5 className='mt-3 mr-3'>{user}</h5>
                <div className='flex-icons'>
                    <div className='d-flex align-items-center justify-content-center dropdown '>
                        <span data-toggle="dropdown" aria-expanded="true" aria-haspopup="true" className=''>
                            <img src={require('../IMG/user.png')} alt="" className="profileIcon" onClick={dropshow} />
                        </span>
                        <div tabindex="-1" role="menu" aria-hidden="true" className={isActive ? "dropdown-menu dropdownMenu dropdownshow show" : "dropdown-menu dropdownMenu dropdownshow"} >
                            <button type="button" tabindex="0" role="menuitem" className="dropdown-item dropdownItem" onClick={profilePage}>
                                Profile
                            </button>
                            <button type="button" tabindex="0" role="menuitem" className="dropdown-item dropdownItem" onClick={logout}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Topbar