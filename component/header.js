import React, { useEffect, useState } from 'react'
import {Navbar, Container } from 'react-bootstrap'
import {FiBell, FiArrowDown, FiArrowUp} from 'react-icons/fi'
import Link from "next/link"
import Image from 'next/image'
// import Cookies from 'js-cookie'
// import axios from '../helper/axios'
// import { useRouter } from 'next/router'
// import { getProfile } from '../redux/asyncActions/profile'
function Header(props) {

  return (
    <div>
        <Navbar className='zwallet-footer mw-100' expand='sm'>
            <Container>
                <Link className='navbar-brand highlight fw-bold' href='/home'>Zwallet</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="d-flex p-3 p-md-0 flex-column flex-sm-row gap-3 ms-auto align-items-center">
                    <Link href="/profile"  className='f400-bck'><Image className=' pict-style' src={`https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/${props.image}`} width={60} height={60} alt={"pict"}/></Link>
                    <Link href="/profile" className='text-decoration-none'>
                        <a>
                        <div className="text-center f400-bck ">{`${props.firstName} ${props.lastName}`}</div>
                        <div className="text-center f400-bck text-decoration-none">{`${props.noTelp}`}</div>
                        </a>
                    </Link>
                    <div>
                        <FiBell size={30}/>
                    </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}
export const getServerSideProps= async(context)=>{
    console.log(context);
    const cookie = cookies(context)
    console.log(cookie);
    const {data} = await axiosApiIntances().get(`/user/profile/${cookie.token}`, {
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
export default Header