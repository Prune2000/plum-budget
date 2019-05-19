import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

class Signup extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .min(5, 'Username must be at least 5 characters')
                        .required('First Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    password: Yup.string()
                        .min(8, 'Password must be at least 8 characters')
                        .required('Password is required'),
                    confirmPassword: Yup.string()
                        .required('Please confirm your password')
                        .oneOf([Yup.ref("password"), null], "Passwords must match")
                })}
                onSubmit={fields => {
                    let userObj = {
                        username: fields.username,
                        email: fields.email,
                        password: fields.password
                    }
                    axios.post('/auth/signup', userObj).then(response => {
                        window.location = response.request.responseURL; // Redirect to dashboard if registering was successful
                    });
                }}
                render={({ errors, status, touched }) => (
                    <Form className="signup-wrapper">
                        <h1>Sign-up</h1>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <br />
                            <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                            <ErrorMessage name="username" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <br />
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <br />
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <br />
                            <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')}/>
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn-register">REGISTER</button>
                        </div>
                        <div><p>Your password and email are fully encrypted in our database. For your own security, we invite you to avoid using a password you're already using on other websites in case these websites get compromised.</p></div>
                    </Form>                    
                )}
            />
        )
    }
}

export default Signup; 

