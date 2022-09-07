import React from 'react';
import { Button, Container, Form, Modal, Row, Col } from 'react-bootstrap';
// import { ButtonSubmit } from '../../components/ButtonAuth';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { topupBalance } from '../../redux/actions/transfer';
import Sidebar from '../../component/Sidebar';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import Link from 'next/link';

const topupSchema = Yup.object().shape({
  amount: Yup.number().typeError('Field must number!!!').min(50000).required(),
})

export const FormTopup = ({errors, handleSubmit, handleChange}) => {
  return (
    <Form noValidate onSubmit={handleSubmit} onChange={handleChange}>
        <Modal.Header closeButton className='border-0 cstm-btn-modal'>
          <Modal.Title className='modal-title fw-bold'>
            <span className='color-text-2'>Topup</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='w-75'>
            <span className='fnt-desc color-text-2'>
            Enter the amount of money, and click submit
            </span>
          </div>
          <div className='pt-5 pb-4'>
            <div className={`d-grid w-100 px-3 border border-1 rounded-2 ${errors.amount ? 'border-danger' : 'border-secondary'}`}>
              <Form.Control
                  type='number'
                  name='amount'
                  className={`shadow-none rounded-0 color-text-6 fw-bold fs-5 text-center border-0 border-bottom mb-2 ${errors.amount ? 'border-danger' : 'border-secondary'}`}
                  isInvalid={!!errors.amount}
                />
            </div>
          </div>
          <span className='fs-6 py-5 text-danger'>{errors.amount}</span>
        </Modal.Body>
        <Modal.Footer className='border-0 modal-footer-position'>

          <div className='d-flex flex-column justify-content-center flex-sm-row gap-3'>
          <Button>
          <Link href='/' className='btn btn-lg fw-bold btn-prim-1' >topup now</Link>
          </Button>
          </div>
        </Modal.Footer>
      </Form>
  )
}

const ModalTopupBalance = ({show, onHide}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const onTopupHandle = (val) => {
    const data = {amount: val.amount}
    dispatch(topupBalance(data)); 
    router.push('/dashboard/top-up-redirect')   
  }
  return (
    <Modal
      show={show}
      onHide={onHide}
      backdrop='static'
      keyboard={false}
      centered
    >
      {/* onSubmit={handleSubmit} onChange={handleChange */}
      <Formik onSubmit={onTopupHandle} initialValues={{amount: ''}} validationSchema={topupSchema}>
        {(props)=><FormTopup {...props}/>}
      </Formik>
    </Modal >
  )
}

function TopUp() {
  const [showModal, setShowModal] = React.useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  return (
    <div>
        <div>
            <Header/>
        </div>

        <section>
        <Row className='pad-content mw-100'>
            <Sidebar/>
            <Col className='col-md-10'>
                <div>
                <div className="d-flex flex-column gap-4 bg-white">
                <h3>How To Top Up</h3>
                
 
                <div className="bg-white-shadow pad-sec-2">
                    <span  className='f400-main'>1. </span>Go to the nearest ATM or you can use E-Banking.
                </div>
                <div className="bg-white-shadow pad-sec-2">
                    <span className='f400-main'>2. </span>   Type your security number on the ATM or E-Banking.
                </div>
                <div className="bg-white-shadow pad-sec-2">
                    <span className='f400-main'>3. </span>   Select “Transfer” in the menu
                </div>
                <div className="bg-white-shadow pad-sec-2">
                    <span className='f400-main'>4. </span>   Type the virtual account number that we provide you at the top.
                </div>
                <div className="bg-white-shadow pad-sec-2">
                    <span className='f400-main'>5. </span>   Type the amount of the money you want to top up.
                </div>
                <div className="bg-white-shadow pad-sec-2">
                    <span className='f400-main'>6. </span>   Read the summary details.
                </div>
                <div className="bg-white-shadow pad-sec-2">
                    <span className='f400-main'>7. </span>   Press transfer / top up.
                </div>
                <div className="bg-white-shadow pad-sec-2">
                    <span className='f400-main'>8. </span>   You can see your money in Zwallet within 3 hours.
                </div>

                </div>
                <div className='pt-5 d-grid'>
                    <Button className='btn border-0 px-4 py-2 btn-prim-1' onClick={openModal}>TopUp Now</Button>
                  </div>
                  <ModalTopupBalance show={showModal} onHide={closeModal}/>
                </div>
            </Col>
        </Row>
        </section>
        <footer>
                <Footer/>
        </footer>
    </div>
  );
}

export default TopUp;