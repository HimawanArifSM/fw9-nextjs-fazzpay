import axios from "axios";
import Cookies from "js-cookie";

const http = ()=>{
    const headers = {}
    const token = Cookies.get("token");
    if (token){
        headers.authorization = `Bearer ${token}`
    }
    return axios.create({
        headers,
        //baseURL: 'http://localhost:3333'
        baseURL: 'https://fazzpay.herokuapp.com'
    })
}
export default http