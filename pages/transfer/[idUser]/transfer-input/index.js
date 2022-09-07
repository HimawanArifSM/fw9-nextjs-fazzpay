import React from 'react'
import { Row, Col, Form, Button} from 'react-bootstrap'
import { FiEdit2} from 'react-icons/fi'
// import tf1 from '../../assets/images/photo-samuel-shusi.png'
import Header from '../../../../component/Header';
import Sidebar from '../../../../component/Sidebar';
import Footer from '../../../../component/Footer';
import { useDispatch } from 'react-redux'
import {useRouter} from 'next/router';
// import {customValue, amount} from '../../assets/redux/reducers/CustomValue'
import { Formik } from 'formik';
import * as Yup from 'yup'
import Image from 'next/image'
import { redirect } from 'next/dist/server/api-utils';
import { addNotes, addAmount } from '../../../../redux/reducers/transfer-value';

const loginschema = Yup.object().shape({
  amount: Yup.number().min(10000).max(5000000).required('Required')
})

function AuthForm({errors, handleSubmit, handleChange}){
    
// const dispatch = useDispatch()
  return(
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange} >
        <div className="d-flex flex-column align-items-center" >
                <Form.Group className="mb-3 d-flex flex-column align-items-center justify-content-center no-border "  >
                    <Form.Control name="amount"  isInvalid={!!errors.amount} type="text" placeholder='0.00'  className="fw-input no-border text-align-center width-auto align-items-center place-holder-center"/>  {/** INI PENTING */}
                    <Form.Control.Feedback className='width-auto align-items-center text-align-center' type="invalid">{errors.amount}</Form.Control.Feedback>
                </Form.Group>
            
            <p>Rp120.000 Available</p>
            
                <Form.Group className="mb-3 d-flex align-items-center wd200 input-group-text input-no-border">
                    <FiEdit2 />
                    <Form.Control name="notes"  type="text" placeholder='Add notes' className=" no-border2"/>  {/** INI PENTING */}
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
        </div>
        <div className=" d-flex justify-content-end">
            <Button type='submit' class="btn btn-primary blue-button">Continue</Button>
        </div>
    </Form>
  )
}

function Transferinput() {
  const router = useRouter();
  console.log(router.query);
  const dispatch = useDispatch();
  const handleSubmit=(val)=>{
    console.log(val);
    router.push(`/transfer/${router.query.idUser}/transfer-input/transfer-confirmation`)
    dispatch(addNotes(val.notes))
    dispatch(addAmount(val.amount))
  }
//   const idUser = router.query.transfer-input;
//   console.log(idUser);
    // const navigate = useNavigate();
    
    // const dispatch = useDispatch()
    // const onLoginRequest = (val) => {
    //     console.log(val.amount);
    //   if(val.amount === 0){
    //     window.alert('Login failed! Lol')
    //   }else{
    //     localStorage.setItem('amount', 'jumlah uang')
    //     dispatch(amount(val.amount))
    //     navigate("/transferconf");

    //   }
    // }
  return (
    <div>
        <div>
            <Header/>
        </div>
        <section>
        <Row className='pad-content mw-100'>
            <Sidebar/>
            <Col className='col-10'>
                <div>
                <div className=" d-flex flex-column gap-5 bg-white">
                <p className="font-700">Transfer Money</p>
                <div className="d-flex flex-row justify-content-between bg-white-shadow">
                    <div className="d-flex flex-row justify-content-between gap-3">
                        {/* <Image src={tf1} alt="pict"/> */}
                        <div>
                            <p>Samuel Suhi</p>
                            <p5>+62 813-8492-9994</p5>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column gap-5">
                    <div>
                        <p>Type the amount you want to transfer and then
                            press continue to the next steps.</p>
                    </div>
                    <Formik 
                    onSubmit={handleSubmit}
                    initialValues={{ notes:'',amount: ''}} validationSchema={loginschema}>
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

export default Transferinput