import React , {useState} from 'react'
import {Button, Form} from 'react-bootstrap'
import {FiLock} from 'react-icons/fi'
import Image from 'next/image';
import Link from "next/link";

import * as Yup from 'yup'
import { Formik } from 'formik'

const loginschema = Yup.object().shape({
  password: Yup.string().min(4).required('Required'),
  repeatPassword: Yup.string().min(4).required('Required')
})


function AuthForm({errors, handleSubmit, handleChange}){
  return(
    <Form onSubmit={handleSubmit} className='d-flex flex-column gap-4'>
        <Form.Group className="mb-3 input-group">
            <div className='input-group-text input-no-border'><FiLock/></div>
            <Form.Control name="keyChange" onChange={handleChange} isInvalid={!!errors.keyChange} type="text" placeholder="key change password"  className="fw-input"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid">{errors.keyChange}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 input-group">
            <div className='input-group-text input-no-border'><FiLock/></div>
            <Form.Control name="password" onChange={handleChange} isInvalid={!!errors.password} type="password" placeholder="Create new password"  className="fw-input"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3 input-group">
        <div className='input-group-text input-no-border'><FiLock/></div>
            <Form.Control name="repeatPassword" onChange={handleChange} isInvalid={!!errors.repeatPassword} type="password" placeholder="Repeat new password"  className="fw-input"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid">{errors.repeatPassword}</Form.Control.Feedback>
        </Form.Group>
        <div className="d-grid">
            <Button type='submit' class="btn btn-primary">Reset Pasword</Button>
        </div>
    </Form>
  )
}


function Createpassword() {
    const [form, setForm] = useState({ email: "", password: "", firstName: "", lastName: "" });

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async () => {
      try {
          const result = await axios.post("auth/login", form);
          Cookies.set("token", result.data.data.token)
      } catch (error) {
        console.log(error);
      }
    };
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
            <div className="d-flex gap-5 flex-column">
                <h3>Start Accessing Banking Needs
                    With All Devices and All Platforms
                    With 30.000+ Users
                </h3>
                <p>Now you can create a new password for your Zwallet account. Type your password twice so we can confirm your new passsword.                
                </p>
                <Formik onSubmit={handleSubmit} initialValues={{passworda:'',passwordb:''}} validationSchema={loginschema}>
                {(props)=><AuthForm {...props}/>}
                </Formik>
                
            </div>
        </div>
      </div>
    </section>
  )
}

export default Createpassword