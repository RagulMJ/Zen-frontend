import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Login.css'
import { useFormik, Formik } from 'formik'
import { Redirect,useHistory } from 'react-router-dom'


function Login() {
    let history = useHistory()
    const [user,setUser] = useState({email:'' ,password : ''})
    
    
    
    const regstr = () => {
        history.push('/register')
    }
    
    const initialValues = {
        email: "",
        password: ""
    };

    const validate = (values) => {
        let errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
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
        try {
            let loginData = await axios.post('https://zen-class-rj.herokuapp.com/login', values);
            localStorage.clear()
            window.localStorage.setItem('myapptoken', loginData.data.token);
            localStorage.setItem("UserId",loginData.data.user._id)
            localStorage.setItem("UserName",loginData.data.user.name)
            localStorage.setItem("UserEmail",loginData.data.user.email)
            localStorage.setItem("UserState",loginData.data.user.state)
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
                            <img src={require('../IMG/logo.png')} alt='logo' />
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
                                                    <label htmlFor="email" className='label-style mb-0'>Email</label>
                                                    <div>
                                                    <input
                                                        type="email"
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
                                                            type="password"
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

                                                <button
                                                    type="submit"
                                                    className={!(dirty && isValid) ? "disabled-btn " : ""}
                                                    disabled={!(dirty && isValid)}
                                                    // onClick = {lgn}
                                                >
                                                    Sign In
                                                </button>
                                            </form>

                                        );
                                    }}
                                </Formik>

                            </div>
                            
                            <div className="row forgot mt-3" onClick={regstr} >Click here register</div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 col-md-4 text-right pr-0'>
                    <img src={require('../IMG/login_image.png')} className='img-class' alt='image' />
                </div>
            </div>

        </div>
    )
}



export default Login