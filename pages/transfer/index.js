import React, { useState } from 'react'
import {Row, Col, Form} from 'react-bootstrap'
import Link from 'next/link'
import {FiSearch} from 'react-icons/fi'
import Header from '../../component/Header';
import Sidebar from '../../component/Sidebar';
import Footer from '../../component/Footer';
import cookies from 'next-cookies'
import axiosApiIntances from '../../helper/axiosServer'
import Image from 'next/image'

// import Image from 'next/image'

export const Searchtrans=({name, phonenumber, pict })=>{
    return(
        <Link href={"/transferinput"} className="d-flex flex-column justify-content-between text-decoration-none f400-bck gap-3">
            <div className="d-flex flex-row gap-3 justify-content-start bg-white ">
                <Image  src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${pict}`} width={60} height={60} alt="pict"/>
                <div>
                    <p>{name}</p>
                    <p5>{phonenumber}</p5>
                </div>
            </div>
        </Link>
    )
} 

function Transfer(props) {
    console.log(props);
    // const navigate = useRouter()
    // const [data, setData] = useState();
    // const handtransfer = async () => {
    //     const results = [];
    //   try {
    //     const result = await axios.get('/user?page=1&limit=50&search=&sort=firstName ASC')
    //     results=result.data.data;
    //     console.log(result);
    //     setData(result);
        
    //     return results;
    //     // if (Cookies.get('token') !== null) {
    //     //   navigate.push('/home')
    //     // }
    //   } catch (e) {
    //     console.log(e.response);
    //     //window.alert(e.response.data.msg)
    //   }
    // }
    // //const state = await handtransfer();
    // //console.log(state);
    // console.log(data);
    // console.log('tes');
    // handtransfer().then((val)=>{console.log(val)}).then((val)=>{console.log(val);})



  return (
    <div>
        <div>
            <Header/>
        </div>
        <section>
        <Row className='pad-content mw-100'>
            <Sidebar/>
            <Col className='col-md-10'>
                <div className="flex-column d-flex gap-5 bg-white f400-bck">
                    <p className="font-700">Search Receiver</p>
                    <Form>
                        <Form.Group className="mb-3 d-flex align-items-center fw-input">
                            <FiSearch />
                            <Form.Control name="search"  type="search" placeholder="Search receiver here"  className="no-border2"/>  {/** INI PENTING */}
                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                        {props.data.map(o=>{
                            return(
                                <>
                                <Link href={`/transfer/${o.id}/transfer-input`} >
                                    <div className="d-flex flex-column justify-content-between text-decoration-none f400-bck gap-3">
                                    <div className="d-flex flex-row gap-3 justify-content-start bg-white ">
                                        <Image  src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${o.image}`} width={60} height={60} alt="pict"/>
                                        <div>
                                            <p>{`${o.firstName} ${o.lastName}`}</p>
                                            <p>{`${o.noTelp}`}</p>
                                        </div>
                                    </div>
                                    </div>
                                </Link>
                                {/* <p>{o.id}</p> */}
                                </>
                            )
                        })}
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
    const {data} = await axiosApiIntances().get('/user?page=1&limit=500&search=&sort=firstName ASC', {
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
export default Transfer

