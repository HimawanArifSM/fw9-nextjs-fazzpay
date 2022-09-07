import React from 'react'
import { Row, Col} from 'react-bootstrap'
// import {Link} from 'react-router-dom'
import { FiDownload,FiShare2} from 'react-icons/fi'

import {FcOk} from 'react-icons/fc'

import tf1 from '../../assets/images/photo-samuel-shusi.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
import { useSelector } from "react-redux";
import Image from 'next/image'
import Link from 'next/link'

//import tf2 from '../../assets/images/failed.png'
// import tf3 from '../../assets/images/photo-jessica-keen.png'
// import tf4 from '../../assets/images/photo-michael-le.png'

function Success() {
    
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
                <div className=" d-flex flex-column gap-5 bg-white">
                <div className="text-center d-flex flex-column gap-3 ">
                    <FcOk className='mx-auto' size={69}/>
                    <p className="font-700">Transfer Success</p>
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
                <div className=" d-flex justify-content-end gap-3">
                    <button className="btn white-button wid-imp2"><FiShare2 /></button>
                    <button className="btn white-button align-items-center d-flex gap-2">
                    <FiDownload />
                    Download PDF
                    </button>
                    <Link href={"/home"} class="btn blue-button wid-imp">Back to Home</Link>
                </div>
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

export default Success  