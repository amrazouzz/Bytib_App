import axios from "axios";

const ApiManager = axios.create({
    baseURL: "https://api.beta.bytib.com/apis/v1",
    responseType: 'json',
    withCredentials: true,
})

export default ApiManager