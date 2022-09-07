import React, { useState } from 'react'
import {FiMail, FiLock, FiUser} from 'react-icons/fi'
import { Alert, Button, Form } from 'react-bootstrap';
import Image from 'next/image';
import Link from "next/link";
import * as Yup from 'yup'
import { Formik } from 'formik'
import { useSelector,useDispatch } from 'react-redux';

const loginschema = Yup.object().shape({
  firstName: Yup.string().min(3).required('Required'),
  lastName: Yup.string().min(3).required('Required'),
  email: Yup.string().email('Invalid email address format').required('Required'),
  password: Yup.string().min(3).required('Required')
})

function AuthForm({errors, handleSubmit, handleChange}){
  // const success = useSelector((state=>state.auth.successmsg))
  // React.useEffect(()=>{
  //   if(success){
  //     Router.push('/auth/Login')
  //   }
  // },[success])
  // let lock = true
  // lock = errors.email!==undefined||errors.password!==undefined||errors.firstName!==undefined||errors.lastName!==undefined
  return(
    <div className="d-flex gap-5 flex-column">
        <h3>Start Accessing Banking Needs
            With All Devices and All Platforms
            With 30.000+ Users
        </h3>
        <p>Transfering money is eassier than ever, you can access Zwallet wherever  you are. Desktop, laptop, mobile phone? we cover all of that for you!                   
        </p>
        {/* {errorMsg && <Alert variant="danger">{errorMsg}</Alert>} */}
        <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-4'> {/** INI PENTING */}
            <Form.Group className="mb-3  input-group">
              <div className='input-group-text input-no-border'>
              <FiUser />
              </div>
              <Form.Control name="firstName" onChange={handleChange} isInvalid={!!errors.firstName} type="firstName" placeholder="Enter your first name"  className="fw-input"/>  {/** INI PENTING */}
              <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3  input-group">
              <div className='input-group-text input-no-border'>
              <FiUser />
              </div>
              <Form.Control name="lastName" onChange={handleChange} isInvalid={!!errors.lastName} type="lastName" placeholder="Enter your last name"  className="fw-input"/>  {/** INI PENTING */}
              <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3  input-group">
              <div className='input-group-text input-no-border'>
              <FiMail />
              </div>
              <Form.Control name="email" onChange={handleChange} isInvalid={!!errors.email} type="email" placeholder="Enter email"  className="fw-input"/>  {/** INI PENTING */}
              <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 input-group">
              <div className='input-group-text input-no-border'> 
              <FiLock />
              </div>
              <Form.Control name="password" onChange={handleChange} isInvalid={!!errors.password} type="password" placeholder="Password"  className="fw-input"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </Form.Group>
          <div className="d-grid">
            <Button type='submit' class="btn btn-primary">Sign Up</Button>
        </div>
        <div className="text-center">
            <p>Already have an account? Let&apos;s <Link href={"/login"}>Login</Link></p>
        </div>
        </Form>  {/** INI PENTING */}
        
    </div>
  )
}

function Register() {
  // const dispatch = useDispatch()
  // const successmsg = useSelector((state=>state.auth.successmsg))
  // const signUpRequest = (val) => {
  //   const request = {firstName:val.firstName,lastName:val.lastName,email:val.email,password:val.password}
  //   if(val.email===''&&val.password===''){
  //     window.alert('Write Your Email and Password')
  //   }else{
  //     dispatch(register(request))
  //   }
  // }
  // React.useEffect(()=>{
  //   if(successmsg){
  //     Router.push('auth/Login')
  //   }
  // },[successmsg])
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
        <Formik onSubmit={''} initialValues={{firstName:'',lastName:'',email:'',password:''}} validationSchema={loginschema}>
        {(props)=><AuthForm {...props}/>}
        </Formik>
        </div>
      </div>
    </section>
  )
}

export default Register