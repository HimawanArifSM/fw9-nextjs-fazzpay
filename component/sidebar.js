import Link from 'next/link';
import React from 'react'
//import { Button } from 'react-bootstrap'
import { AiOutlineAppstore } from 'react-icons/ai'
import { FiArrowUp, FiLogOut, FiPlus, FiUser } from 'react-icons/fi'
//import { useDispatch } from 'react-redux';
//import { Link, useNavigate } from 'react-router-dom'
//import {logout} from '../redux/reducers/auth'

function Sidebar() {
    // const dispatch = useDispatch();
    // const navigate = useNavigate()
    // const onLogout= () =>{
    //     dispatch(logout(()=>{
    //         navigate('/')}))
    // }
  return (
    <div className='col-12 col-md-2 d-flex flex-md-column flex-row justify-content-md-between sidebar bg-white mw-md-100 mw-100 gap-5'>
        <div className="d-flex flex-md-column gap-md-5 gap-5 sb-brake">
            <Link href={"/dashboard/home"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none'>
                <a><AiOutlineAppstore />
                <p5 className='no-disp'>Dashboard</p5></a>
            </Link>
            <Link href={"/transfer/transfer"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none'>
                <a><FiArrowUp />
                <p5 className='no-disp'>Transfer</p5></a>
            </Link>
            <Link href={"/topup"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none'>
                <a><FiPlus />
                <p5 className='no-disp'>Top Up</p5></a>
            </Link>
            <Link href={"/profile"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none'>
                <a><FiUser />
                <p5 className='no-disp'>Profile</p5></a>
            </Link>
        </div>
        <div>
            <div type='submit' className='align-items-center d-flex gap-1 f400-bck text-decoration-none ' 
            // onClick={onLogout}
            >
                <FiLogOut />
                <p5 className='no-disp'>Logout</p5>
            </div>
        </div>
    </div>
  )
}

export default Sidebar