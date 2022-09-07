import React from 'react'
import { Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FiClipboard} from 'react-icons/fi'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from '../../assets/redux/asyncActions/profile';

function Managephone() {
    const dispatch = useDispatch();
    const response = useSelector((state) => state.coba?.results);
    React.useEffect(()=>{
        dispatch(getProfile())
        //console.log(response?.results?.fullname);
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
                <h3>Manage Phone Number</h3>
                <p>You can only delete the phone number and then you must add another phone number.</p>
                <div className="d-flex justify-content-between bg-white-shadow align-items-center margin-btm-ex" >
                    <div>
                        <p>Primary</p>
                        <h3>+62 {response?.results?.phonenumber.slice(1)}</h3>
                    </div>
                    <div>
                        <Link to={"/addphone"} type="button" class="btn"><FiClipboard/></Link>
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

export default Managephone