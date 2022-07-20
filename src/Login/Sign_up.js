import axios from 'axios';
import { Formik } from 'formik'
import React from 'react'
import './Sign_up.css'
import {Redirect, useHistory} from 'react-router-dom'
import Login from './Login';

function Sign_up() {
    let history = useHistory()

    
    
    const initialValues = {
        name : "",
        state : "",
        email: "",
        password: ""
    };

    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.name){
            errors.name = " name is required"
        }
        if(!values.state){
            errors.state = "state is required"
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Invalid Email";
        }
        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 4) {
            errors.password = "Password too short";
        }
        return errors;
    };

    const submitForm = async (values) => {
        console.log(values);
        // values.preventDefault();
        try {
            let signupData = await axios.post('https://zen-class-rj.herokuapp.com/register', values);
            localStorage.clear()
            localStorage.setItem("UserEmail",signupData.data.current.email)
            localStorage.setItem("UserName",signupData.data.current.name)
            localStorage.setItem("UserState",signupData.data.current.state)
            localStorage.setItem("UserId",signupData.data.current._id)
            history.push('/dashboard')
          } catch (error) {
            console.log(error);
            alert('Something went wrong');
          }
    };

  return (
    <div className='container-custom mr-0 pr-0'>
        <div className='row m-0'>
            <div className='col-md-8 '>
                <div className='row'>
                    <div className='col-3'>
                        <img src={require('../IMG/logo.png')} alt='logo'/>
                    </div>
                </div>
                <div className='row'>
                    <div class="col-md-12 d-flex flex-column justify-content-center align-items-center">
                        <div className='col-md-6'>
                        <Formik
                                    initialValues={initialValues}
                                    validate={validate}
                                    onSubmit={submitForm}
                                >
                                    {(formik) => {
                                        const {
                                            values,
                                            handleChange,
                                            handleSubmit,
                                            errors,
                                            touched,
                                            handleBlur,
                                            isValid,
                                            dirty
                                        } = formik;
                                        return (


                                            <form onSubmit={handleSubmit}>
                                                <div className="form-group mt-2">
                                                    <label htmlFor="name" className='label-style mb-0'> Name</label>
                                                    <div>
                                                    <input
                                                        type={"name"}
                                                        name="name"
                                                        id="name"
                                                        value={values.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={
                                                            errors.name && touched.name ? "input-error" : null
                                                        }
                                                    />
                                                    {errors.name && touched.name && (
                                                        <span style={{color : 'red'}} className="error">{errors.name}</span>
                                                    )}
                                                    </div>
                                                </div>


                                                <div className="form-group mt-2">
                                                    <label htmlFor="state" className='label-style mb-0'>State</label>
                                                    <div>
                                                    <input
                                                        type={"state"}
                                                        name="state"
                                                        id="state"
                                                        value={values.state}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={
                                                            errors.state && touched.state ? "input-error" : null
                                                        }
                                                    />
                                                    {errors.state && touched.state && (
                                                        <span style={{color : 'red'}} className="error">{errors.state}</span>
                                                    )}
                                                    </div>
                                                </div>

                                                <div className="form-group mt-2">
                                                    <label htmlFor="email" className='label-style mb-0'>Email</label>
                                                    <div>
                                                    <input
                                                        type={"email"}
                                                        name="email"
                                                        id="email"
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        className={
                                                            errors.email && touched.email ? "input-error" : null
                                                        }
                                                    />
                                                    {errors.email && touched.email && (
                                                        <span style={{color : 'red'}} className="error">{errors.email}</span>
                                                    )}
                                                    </div>
                                                </div>

                                                <div className="form-group mt-1">
                                                    <label htmlFor="password" className='label-style mb-0'>Password</label>
                                                    <div>
                                                        <input
                                                            type={"password"}
                                                            name="password"
                                                            id="password"
                                                            value={values.password}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            className={
                                                                errors.password && touched.password ? "input-error" : null
                                                            }
                                                        />
                                                        {errors.password && touched.password && (
                                                            <span className="error">{errors.password}</span>
                                                        )}
                                                    </div>
                                                </div>
                                                {/* <div> */}
                                                <button
                                                    type="submit"
                                                    className={!(dirty && isValid) ? "disabled-btn sign " : "sign"}
                                                    disabled={!(dirty && isValid)}
                                                    // value={'Sign Up'}
                                                    // onClick={() => history.push("/dashboard", { replace: true })}
                                                >
                                                sign up
                                                </button>
                                            </form>

                                        );
                                    }}
                                </Formik>
                        </div>
                        <div class="row forgot mt-4" onClick={()=>{history.push('login')}}>Click here to login</div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-4 text-right pr-0'>
                <img src={require('../IMG/login_image.png')} className='img-class' alt='image'/>
            </div>
        </div>
        
    </div>
  )
}
export{}

export default Sign_up