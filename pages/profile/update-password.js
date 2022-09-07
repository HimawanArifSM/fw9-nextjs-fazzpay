import React from 'react'
import { Row, Col, Form, Button} from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'
import { FiLock} from 'react-icons/fi'

// import user1 from '../../assets/images/profile-pict.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';

import { Formik } from 'formik';
import * as Yup from 'yup'

const loginschema = Yup.object().shape({
  passworda: Yup.string().min(4).required('Required'),
  passwordb: Yup.string().min(4).required('Required'),
  passwordc: Yup.string().min(4).required('Required'),
})

function AuthForm({errors, handleSubmit, handleChange}){
  return(
    <Form noValidate onSubmit={handleSubmit} className='pad-content d-flex flex-column gap-4'>
    <Form.Group className="mb-3 input-group">
    <div className='input-group-text input-no-border'><FiLock/></div>
        <Form.Control name="passworda" onChange={handleChange} isInvalid={!!errors.passworda} type="password" placeholder="Current password"  className="fw-input"/>  {/** INI PENTING */}
        <Form.Control.Feedback type="invalid">{errors.passworda}</Form.Control.Feedback>
    </Form.Group>
    <Form.Group className="mb-3 input-group">
        <div className='input-group-text input-no-border'><FiLock/></div>
        <Form.Control name="passwordb" onChange={handleChange} isInvalid={!!errors.passwordb} type="password" placeholder="New password"  className="fw-input"/>  {/** INI PENTING */}
        <Form.Control.Feedback type="invalid">{errors.passwordb}</Form.Control.Feedback>
    </Form.Group>
    <Form.Group className="mb-3 input-group">
        <div className='input-group-text input-no-border'><FiLock/></div>
        <Form.Control name="passwordc" onChange={handleChange} isInvalid={!!errors.passwordc} type="password" placeholder="Repeat new password"  className="fw-input"/>  {/** INI PENTING */}
        <Form.Control.Feedback type="invalid">{errors.passwordc}</Form.Control.Feedback>
    </Form.Group>
    <div className="d-grid">
        <Button type='submit' class="btn btn-primary">Reset Pasword</Button>
    </div>
    </Form>
  )
}


function Changepassword() {
    const navigate = useNavigate();
  const onLoginRequest = (val) => {
    if(val.passworda === '' || val.passwordb===''||val.passwordc===''){
      window.alert('Can\'t change password')
    }
    else if(val.passworda!==val.passwordb){
        window.alert('Password not match')
    }
    else{
      localStorage.setItem('auth', 'token buat login')
      navigate("/profile");
    }
  }
  return (
    <div>
        <div>
            <Header/>
        </div>
        <section>
        <Row className='pad-content mw-100  d-flex justify-content-between'>
            <Sidebar/>
            <Col className='col-md-10'>
                <div>
                <div className="d-flex gap-5 flex-column bg-white">
                <h3>Change Password
                </h3>
                <p>You must enter your current password and then type your new password twice.             
                </p>
                    <div className='pad-content'>
                    <Formik 
                        onSubmit={onLoginRequest}
                        initialValues={{passworda:'',passwordb:'',passwordc:''}} validationSchema={loginschema}>
                        {(props)=><AuthForm {...props}/>}
                    </Formik>
                    </div>
                </div>
                </div>
            </Col>
        </Row>
        </section>
        <footer>
                <Footer/> 
        </footer>
    </div>
  )
}

export default Changepassword