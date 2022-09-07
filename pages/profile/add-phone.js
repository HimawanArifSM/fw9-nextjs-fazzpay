import React from 'react'
import { Row, Col, Form, Button} from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'
import { FiPhone} from 'react-icons/fi'
import { useDispatch } from 'react-redux'

import {phoneNumber} from '../../assets/redux/reducers/CustomValue'


import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';

import { Formik } from 'formik';
import * as Yup from 'yup'

const loginschema = Yup.object().shape({
  phoneNumber: Yup.string().matches(/[8]/, 'start with 8').min(10).max(12)
})

function AuthForm({errors, handleSubmit, handleChange}){
    return(
        <Form noValidate onSubmit={handleSubmit} className='margin-btm d-flex justify-content-center align-items-center flex-column pin-input-wrapper gap-3'> {/** INI PENTING */}
        <Form.Group className="mb-3 input-group ">
            {/* <FiPhone className=' icon-style '/>+62 */}
            <div className='input-group-text input-no-border'><FiPhone /> +62</div>
            <Form.Control name="phoneNumber" onChange={handleChange} isInvalid={!!errors.phoneNumber} type="text" placeholder="Enter your phone number"  className="fw-input"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid">{errors.phoneNumber}</Form.Control.Feedback>
        </Form.Group>
            {/** INI PENTING */}
        <div className="text-align-center">
            <Button type='submit' class="btn btn-primary">Add Phone Number</Button>
        </div>
        </Form>
    )
}

function Addphone() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onLoginRequest = (val) => {
      if(val.phoneNumber===''){
        
        window.alert('Can\'t change phone number')
      }
      else{
        dispatch(phoneNumber(val.phoneNumber))
        navigate("/managephone");
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
                <h3>Add Phone Number
                </h3>
                <p>Add at least one phone number for the transfer ID so you can start transfering your money to another user.        
                </p>
                <div className='pad-content '>
                <Formik 
                    onSubmit={onLoginRequest}
                    initialValues={{phoneNumber:''}} validationSchema={loginschema}>
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

export default Addphone