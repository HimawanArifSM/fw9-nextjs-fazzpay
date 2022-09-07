import axios from "axios";

const axiosApiIntances = ()=>{return axios.create({
    baseURL: 'https://fazzpay.herokuapp.com/'
})
}
export default axiosApiIntances