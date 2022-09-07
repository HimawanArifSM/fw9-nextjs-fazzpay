import React from 'react'
import { Row, Col, Form, Button} from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';

import { Formik } from 'formik';
import * as Yup from 'yup'

const loginschema = Yup.object().shape({
  a: Yup.number().min(0).max(9).required('Required'),
  b: Yup.number().min(0).max(9).required('Required'),
  c: Yup.number().min(0).max(9).required('Required'),
  d: Yup.number().min(0).max(9).required('Required'),
  e: Yup.number().min(0).max(9).required('Required'),
  f: Yup.number().min(0).max(9).required('Required'),
})

function AuthForm({errors, handleSubmit, handleChange}){
  return(
    <Form onSubmit={handleSubmit} className='d-flex flex-column'> {/** INI PENTING */}
        <div className='margin-btm d-flex justify-content-center flex-row pin-input-wrapper gap-3'>
        <Form.Group className="mb-3 d-flex align-items-center pin-inpt">
            <Form.Control  onChange={handleChange} isInvalid={!!errors.a} name='a' maxlength="1" max="9" min="0"  className="pin-inp pin"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center pin-inpt">
            <Form.Control  onChange={handleChange} isInvalid={!!errors.b} name='b' maxlength="1" max="9" min="0"  className="pin-inp pin"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
            <Form.Control  onChange={handleChange} isInvalid={!!errors.c} name='c' maxlength="1" max="9" min="0"  className="pin-inp pin"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
            <Form.Control  onChange={handleChange} isInvalid={!!errors.d} name='d' maxlength="1" max="9" min="0"  className="pin-inp pin"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center  pin-inpt">
            <Form.Control onChange={handleChange} isInvalid={!!errors.e} name='e' maxlength="1" max="9" min="0"  className="pin-inp pin"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
            <Form.Control onChange={handleChange} isInvalid={!!errors.f} name='f' maxlength="1" max="9" min="0"  className="pin-inp pin"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
      {/** INI PENTING */}
      </div>
    <div className="d-grid">
        <Button type='submit' class="btn btn-primary">Continue</Button>
    </div>
    </Form>
  )
}


function Changepin() {
    const navigate = useNavigate();
    const onLoginRequest = (val) => {
      if(val.a === '' || val.b === '' || val.c===''||val.d===''||val.e===''||val.f===''){
        window.alert('Login failed! Lol')
      }else{
        navigate("/newpin");
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
                <h3>Change PIN
                </h3>
                <p>Enter your current 6 digits Zwallet PIN below to continue to the next steps.           
                </p>
                    <div className='pad-content '>
                    <Formik onSubmit={onLoginRequest} initialValues={{a: '', b: '', c: '', d: '', e: '', f: '', }} validationSchema={loginschema}>
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

export default Changepin