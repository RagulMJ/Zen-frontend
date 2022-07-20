import axios from 'axios'
import { Formik,useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Profile.css'

function Profile() {
    let params = useParams()
    let [user,setUserdata] = useState([])

    useEffect(() => {
       async function fetchdata(){
        let id = localStorage.getItem("UserId")
        let userData = {
            name : localStorage.getItem("UserName"),
            email : localStorage.getItem("UserEmail"),
            state : localStorage.getItem("UserState")
        }
        formik.setValues(userData)
    }
    fetchdata()
    }, [])
    
    let formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          state: ""
        },
        validate: (values) => {
          const errors = {};
          if(!values.name){
            errors.name = "Name should not be blank";
          }
          if (!values.email) {
            errors.email = "email should not be blank";
          }
          if (!values.state) {
            errors.state = "state should not be blank";
          }
          return errors;
        }
      })

    
  return (
      
    <div className='body_box'>
        <div className='container-fluid col-11'>
        <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-8">
            <label>Name</label>
            <input
              type={"text"}
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="form-control"
              style={{ border: formik.errors.name ? "1px solid red" : "" ,
              border: formik.values.name ? "1px solid green" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.name}</span>
          </div>
          <div className="col-lg-8 mt-3">
            <label>Email</label>
            <input
              type={"text"}
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="form-control"
              style={{ border: formik.errors.email ? "1px solid red" : "" ,
              border: formik.values.email ? "1px solid green" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.email}</span>
          </div>
          <div className="col-lg-8 mt-3">
            <label>state</label>
            <input
              type={"text"}
              name="state"
              onChange={formik.handleChange}
              value={formik.values.state}
              className="form-control"
              style={{ border: formik.errors.state ? "1px solid red" : "" ,
              border: formik.values.state ? "1px solid green" : "" }}
            />
            <span style={{ color: "red" }}>{formik.errors.state}</span>
          </div>
          
          
          
        </div>
      </form>
</div>
</div>
  )
}

export default Profile