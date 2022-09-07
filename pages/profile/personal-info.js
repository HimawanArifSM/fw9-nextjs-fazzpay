import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../assets/redux/asyncActions/profile';

function Personalinfo() {
    const dispatch = useDispatch();
    const response = useSelector((state) => state.coba?.results);
    const fullName= response?.fullname
    const splitName = response?.fullname?.split(' ')
    const firstName = splitName[0];
    const lastName = fullName.slice(`${firstName.length}`)
    const phone = response?.phonenumber?.slice(1)
    const token = useSelector((state) => state.auth.token);
    React.useEffect(()=>{
        dispatch(getProfile(token))
        //console.log(response?.fullname);
    }, []);
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
                <h3>Personal Information</h3>
                <p>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                <div className="bg-white">
                    <p>First Name</p>
                    <h5>{firstName}</h5>
                </div>
                <div className="bg-white">
                    <p>Last Name</p>
                    <h5>{lastName}</h5>
                </div>
                <div className="bg-white">
                    <p>Verified E-mail</p>
                    <h5>{response?.email}</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center bg-white">
                    <div>
                        <p>Phone Number</p>
                        <h5>+62 {phone}</h5>
                    </div>
                    <div>
                        <Link className='text-decoration-none font-400' to={"/managephone"}>Manage</Link>
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

export default Personalinfo