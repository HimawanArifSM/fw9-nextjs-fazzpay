import React from 'react'
import { Row, Col} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { FiArrowRight,FiEdit2} from 'react-icons/fi'

// import user1 from '../../assets/images/profile-pict.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../assets/redux/reducers/auth'
import { getProfile } from '../../assets/redux/asyncActions/profile';
import Image from 'next/image';

function Profile() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate()
    const onLogout= () =>{
        dispatch(logout(()=>{
            navigate('/')}))
    }

    const profile= useSelector((state)=> state.coba?.results)
    console.log('profile: '+profile.phonenumber);
    
    React.useEffect(()=>{
        dispatch(getProfile(token))
    }, []);
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
                <div className="bg-white text-center d-flex justify-content-center flex-column gap-2 pad-content" >
                <div className="justify-content-center d-flex"><Image  className='pict-style2' src={'https://res.cloudinary.com/dd1uwz8eu/image/upload/v1659549135/'+data.image} alt="pict"/>
                </div>
                <div className='d-flex gap-2 align-items-center justify-content-center'><FiEdit2 />Edit</div>
                <h3>{profile.fullname}</h3>
                <h5 >+62 {profile.phonenumber?.slice(1)}</h5>
                <Link to={"/personalinfo"} className="btn d-flex justify-content-between bg-gray">
                    <h>Personal Information</h>
                    <FiArrowRight size={25}/>
                </Link>
                <Link to={"/changepassword"} className="btn d-flex justify-content-between bg-gray">
                    <h>Change Password</h>
                    <FiArrowRight size={25}/>
                </Link>
                <Link to={"/changepin"} className="btn d-flex justify-content-between bg-gray">
                    <h>Change PIN</h>
                    <FiArrowRight size={25}/>
                </Link>
                <div type='submit' className="btn bg-gray justify-content-start d-flex" onClick={onLogout}>
                    <h>Logout</h>
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

export default Profile