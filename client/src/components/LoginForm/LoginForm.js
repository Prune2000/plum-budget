import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

class Login extends React.Component {
    render() {
        return (
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .required('Username is required'),
                    password: Yup.string()
                        .required('Password is required')
                })}
                onSubmit={fields => {
                    let userObj = {
                        username: fields.username,
                        email: fields.email,
                        password: fields.password
                    }
                    axios.post('/auth/login', userObj).then(res => {
                        window.location = "/dashboard"
                    });
                }}
                render={({ errors, status, touched }) => (
                    <Form className="signup-wrapper">
                        <h1>Login</h1>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <br />
                            <Field name="username" type="text" className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')} />
                            <ErrorMessage name="username" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <br />
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn-register">Login</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default Login; 