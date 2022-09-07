import React, { useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import {FiMail} from 'react-icons/fi'
import * as Yup from 'yup'
import { Formik } from 'formik'
import Link from "next/link";
import Image from 'next/image';


const loginschema = Yup.object().shape({
  a: Yup.number().required('Required'),
  b: Yup.number().required('Required'),
  c: Yup.number().required('Required'),
  d: Yup.number().required('Required'),
  e: Yup.number().required('Required'),
  f: Yup.number().required('Required'),
})

function AuthForm({errors, handleSubmit, handleChange}){
  //const navigate = useNavigate();
  //const successMsg = useSelector((state) => state.auth.successMsg);
 
  // React.useEffect(() => {
  //   if (successMsg) {
  //     navigate("/createsuccess", { state: { successMsg } });
  //   }
  // }, [navigate, successMsg]);

  return(
    <Form onSubmit={handleSubmit} className='d-flex flex-column gap-3'> {/** INI PENTING */}
        <div className='d-flex justify-content-center flex-row pin-input-wrapper gap-3'>
        <Form.Group className="mb-3 d-flex align-items-center pin-inpt">
            <Form.Control onChange={handleChange} isInvalid={!!errors.a} name='a' maxlength="1" max="9" min="0"  className="pin-inp pin"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center pin-inpt">
            <Form.Control onChange={handleChange} isInvalid={!!errors.b} name='b' maxlength="1" max="9" min="0"  className="pin-inp pin"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
            <Form.Control onChange={handleChange} isInvalid={!!errors.c} name='c' maxlength="1" max="9" min="0"  className="pin-inp pin"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
            <Form.Control onChange={handleChange} isInvalid={!!errors.d} name='d' maxlength="1" max="9" min="0"  className="pin-inp pin"/>  {/** INI PENTING */}
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
        </div>
        <div className="d-grid">
        <Button type='submit' class="btn btn-primary">Confirm</Button>
    </div>
    </Form> 
  )
}

function Createpin() {
  const [form, setForm] = useState({ email: ""});

  const handleChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
        const result = await axios.post("auth/forgot-password", form);
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
                <h3>Secure Your Account, Your Wallet,
                    and Your Data With 6 Digits PIN
                    That You Created Yourself.
                </h3>
                <p>Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don&apos;t tell anyone about your Zwallet account password and the PIN.                  
                </p>
                {/* {errorMsg && <Alert variant="danger">{errorMsg}</Alert>} */}
                <Formik onSubmit={handleSubmit} initialValues={{a: '', b: '', c: '', d: '', e: '', f: '', }} validationSchema={loginschema}>
                {(props)=><AuthForm {...props}/>}
                </Formik>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Createpin