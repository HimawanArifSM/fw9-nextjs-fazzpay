import React from 'react'
import { Row, Col} from 'react-bootstrap'
import Header from '../../component/Header';
import Sidebar from '../../component/Sidebar';
import Footer from '../../component/Footer';
import cookies from 'next-cookies'
import axiosApiIntances from '../../helper/axiosServer'
import Image from 'next/image';

function CompHistory(props){
    //const response = useSelector((state) => state.ressHistory?.results);
    //console.log(response.results?.picture);
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
        <p>Rp{props.amount}</p>
    </div>
</div>
)
}




function History(Props) {
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
                        <p className="font-700">Transaction History</p>
                        {Props.data.map(o=>{
                            return(
                                <CompHistory key={o.id} pict={o.image} name={`${o.firstName} ${o.lastName}`} type={o.type} amount={o.amount}/>
                            )
                        })}
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
export default History