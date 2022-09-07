import React, { useEffect, useState } from 'react'
import { Row, Col} from 'react-bootstrap'
import {FiArrowUp,FiPlus, FiArrowDown} from 'react-icons/fi'
import Footer from '../../component/Footer';
import axios from '../../helper/axios'
import Header from '../../component/header';
import Sidebar from '../../component/Sidebar';
import { useRouter } from 'next/router'
import cookies from 'next-cookies'
import axiosApiIntances from '../../helper/axiosServer'
import Link from "next/link";
import Image from 'next/image';


function CompHistory(props){
return(
    <div className="d-flex flex-row justify-content-between">
        <div className="d-flex flex-row justify-content-between gap-3">
            <Image className='pict-style3' src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${props.image}`} width={60} height={60} alt="pict"/>
            <div>
                <p>{props.name}</p>
                <p>{props.type}</p>
            </div>
        </div>
    <div>
        <p>Rp {props.amount}</p>
    </div>
</div>
)
}


function Home(props) {
    // const navigate = useRouter()
    // const [data, setData] = useState({})
    // useEffect(()=> {
    //   getDatauser()
    // }, [])
    
    // const getDatauser =  async() => {
    //   try {
    //     const result = await axios.get(`/user/profile/${Cookies.get('id')}`)
    //     setData(result.data.data)
    //     // console.log(result.data.data);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // }

  return (
    <div>
        <Header/>
        <section>
        <Row className='pad-content mw-100'>
            <Sidebar/>
            <Col className='col-10'>
                <div className='d-flex flex-column gap-4'>
                    <div className="d-flex justify-content-between bg-main-ct pad-sec-1">
                        <div>
                            <p>Balance</p>
                            <h4>Rp data?.balance</h4>
                            <p>data?.noTelp</p>
                        </div>
                        <div className="d-flex flex-column gap-2 ">
                            <Link href="/transfer/index" className="btn blue-button align-items-center d-flex gap-1">
                                <a><FiArrowUp />
                                <p5>Transfer</p5></a>
                            </Link>
                            <Link href="/topup" className="btn blue-button align-items-center d-flex gap-1">
                                <a><FiPlus />
                                <p5>Top Up</p5></a>
                            </Link>
                        </div>
                    </div>
                    <Col className=' d-flex flex-md-row flex-column gap-4'>
                        <Col md={7} className=' bg-white pad-sec-1 '>
                            <div className="d-flex justify-content-between">
                                    <div>
                                    <FiArrowDown/>
                                    <p7>Income</p7>
                                        <p>Rp2.120.000</p>
                                </div>
                                <div>
                                    <FiArrowUp/>
                                    <p7>Expense</p7>
                                    <p>Rp1.560.000</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Image className="img-fluid" src="/images/graphic-travic.png" width={341} height={268} alt="pict"/>
                            </div>
                        </Col>
                        <Col md={5} className='d-flex flex-column bg-white no-flex pad-sec-1 gap-3 '>
                            <div className="d-flex justify-content-between">
                                <p5>Transaction History</p5>
                                <Link className='f400-bck text-decoration-none' href="/history">See all</Link>
                            </div>
                            {props.data.map(o=>{
                            return(
                                <CompHistory key={o.id} pict={o.image} name={`${o.firstName} ${o.lastName}`} type={o.type} amount={o.amount}/>
                            )
                            })}
                            
                        </Col>
                    </Col>
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
export const getServerSideProps= async(context)=>{
    console.log(context);
    const cookie = cookies(context)
    console.log(cookie);
    const {data} = await axiosApiIntances().get('transaction/history?page=1&limit=2&filter=MONTH', {
        headers: {
            Authorization: "Bearer "+cookie.token
        }
    })
    console.log(data);
    return {props:{
        data: data.data,
        pagination: data.pagination
    }}
}
export default Home

