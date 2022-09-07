import "bootstrap/dist/css/bootstrap.css"
import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "../../helper/axios";
import { Button, Form } from 'react-bootstrap';
import {FiMail, FiLock} from 'react-icons/fi'
import { Formik } from 'formik';
import Link from "next/link";
import Image from 'next/image';
import withYup from 'next-yup';
import * as Yup from 'yup';
import { useRouter } from 'next/router'


const loginschema = Yup.object().shape({
    email: Yup.string().email('Invalid email address format').required('Required'),
    password: Yup.string().min(3).required('Required')
  })
  
  function AuthForm(props){
    
  
    return(
      <div className="d-flex gap-5 flex-column">
          <h3>Start Accessing Banking Needs
              With All Devices and All Platforms
              With 30.000+ Users
          </h3>
          <p>Transfering money is eassier than ever, you can access Zwallet wherever  you are. Desktop, laptop, mobile phone? we cover all of that for you!                   
          </p>
          <Form noValidate onSubmit={props.handleSubmit} className='d-flex flex-column gap-4'> {/** INI PENTING */}
            <Form.Group className="mb-3  input-group">
              <div className='input-group-text input-no-border'>
              <FiMail />
              </div>
              <Form.Control name="email" onChange={props.handleChange} isInvalid={!!props.errors.email} type="email" placeholder="Enter email"  className="fw-input"/>  {/** INI PENTING */}
              <Form.Control.Feedback type='invalid'>{props.errors.email}</Form.Control.Feedback>
            </Form.Group>
  
            <Form.Group className="mb-3 input-group">
              <div className='input-group-text input-no-border'> 
              <FiLock />
              </div>
              <Form.Control name="password" onChange={props.handleChange} isInvalid={!!props.errors.password} type="password" placeholder="Password"  className="fw-input"/>  {/** INI PENTING */}
              <Form.Control.Feedback type="invalid">{props.errors.password}</Form.Control.Feedback>
            </Form.Group>
          
          <div className="text-end">
              <Link href={"/resetpassword"}>Forgot password?</Link>
          </div>
          <div className="d-grid">
              <Button type='submit' className="btn btn-primary">Login</Button>
          </div>
          <div className="text-center">
              <p>Don&apos;t have an account? Let&apos;s <Link href={"/register"}>Sign Up</Link></p>
          </div>
          </Form>  {/** INI PENTING */}
      </div>
    )
  }


export default function Login() {
  const navigate = useRouter()
  const handleLogin = async (value) => {
    try {
      const result = await axios.post('auth/login', value)
      Cookies.set('token', result.data.data.token)
      Cookies.set('id', result.data.data.id)
      if (Cookies.get('token') !== null) {
        navigate.push('/home')
      }
    } catch (e) {
      console.log(e.response);
      window.alert(e.response.data.msg)
    }
  }

  return (
    <section>
      <div className='d-flex flex-row'>
        <div className="col-md-7 auth-intro auth-form-wrapper display-none">
          <div>
            <h1>Zwallet</h1>
          </div>
          <div className="d-flex align-items-center flex-column">
            <div>
              <Image width={439} height={846} src='/images/png-phone.png' alt="pict"/>
            </div>
            <div>
              <h1>App that Covering Banking Needs.</h1>
              <p1>Zwallet is an application that focussing in banking needs for all users
                in the world. Always updated and always following world trends.
                5000+ users registered in Zwallet everyday with worldwide
                users coverage.</p1>
            </div>
          </div>
        </div>
        <div className="col-5 auth-form-wrapper ">
            <Formik 
            onSubmit={handleLogin}
            initialValues={{email: '', password:''}} validationSchema={loginschema}>
            {(props)=><AuthForm {...props}/>}
            </Formik>
        </div>
      </div>
    </section>
  );
}
