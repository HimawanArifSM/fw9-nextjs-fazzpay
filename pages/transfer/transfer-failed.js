import React from 'react'
import { Row, Col} from 'react-bootstrap'
import Modals from './Modals'
import {FcHighPriority} from 'react-icons/fc'
import { useSelector } from "react-redux";

import tf1 from '../../assets/images/photo-samuel-shusi.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
import Image from 'next/image';
//import tf2 from '../../assets/images/failed.png'
// import tf3 from '../../assets/images/photo-jessica-keen.png'
// import tf4 from '../../assets/images/photo-michael-le.png'

function Failed() {
    const value = useSelector((state)=>state.editValue.value)
    const totalAmount = useSelector((state)=>state.editValue.amount)
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
                <div className="d-flex flex-column gap-5 bg-white">
                <div className="text-center d-flex flex-column gap-3 ">
                    <FcHighPriority className='mx-auto' size={69}/>
                    <p className="font-700">Transfer Failed</p>
                    <p>We can&apos;t transfer your money at the moment, we recommend you to check your internet connection and try again.</p>
                </div>
                <div className="d-flex flex-column justify-content-between bg-white-shadow">
                    <p>Amount</p>
                    <h3>Rp{totalAmount}</h3>
                </div>
                <div className="d-flex flex-column justify-content-between bg-white-shadow">
                    <p>Balance Left</p>
                    <h3>Rp20.000</h3>
                </div>
                <div className="d-flex flex-column justify-content-between bg-white-shadow">
                    <p>Date/Time</p>
                    <h3>May 11, 2020 - 12.20</h3>
                </div>
                <div className="d-flex flex-column justify-content-between bg-white-shadow">
                    <p>Notes</p>
                    <h3>{value}</h3>
                </div>
                
                <div className="d-flex flex-row justify-content-between bg-white-shadow">
                    <div className="d-flex flex-row justify-content-between gap-3">
                        <Image src={tf1} alt="pict"/>
                        <div>
                            <p>Samuel Suhi</p>
                            <p5>+62 813-8492-9994</p5>
                        </div>
                        
                    </div>
                </div>
                <div className=" d-flex justify-content-end">
                <Modals/>
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

export default Failed