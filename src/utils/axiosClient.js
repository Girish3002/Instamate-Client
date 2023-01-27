import axios from "axios";
import { getItem, KEY_ACESS_TOKEN, removeItem, setItem } from "./localStorageManager";
import store from "../redux/store";
// import store from "../redux/store";
import { setLoading, showToast } from "../redux/slices/appConfigSlice";
import { TOAST_FAILURE } from "../App";


let baseURL = "http://localhost:4000/";
console.log("env is", process.env.NODE_ENV);
if(process.env.NODE_ENV=='production'){
    baseURL = process.env.REACT_APP_SERVER_BASE_URL
}


export const axiosClient = axios.create({
    baseURL,
    withCredentials: true  // means allowing coolies 
})
  
axiosClient.interceptors.request.use(
    (request) => {
        const acessToken = getItem(KEY_ACESS_TOKEN);
        console.log(acessToken)
        request.headers['Authorization'] = `Bearer ${acessToken}`;
        store.dispatch(setLoading(true));
        return request;
    }

)

axiosClient.interceptors.response.use(
    async (response) => {
        store.dispatch(setLoading(false));
        const data = response.data;
        if (data.status === 'ok') {
            return data;
        }

        const originalRequest = response.config;
        const statusCode = data.statusCode;
        const error = data.message;

        store.dispatch(showToast({
            type: TOAST_FAILURE,
            message: error
        }))

        // means acess token has expired
        if (statusCode === 401 && !originalRequest._retry) {
            // const response = await axios.get('http://localhost:4000/auth/refresh');
            originalRequest._retry = true
            const response = await axios
                .create({ withCredentials: true, })
                .get(`${process.env.REACT_APP_SERVER_BASE_URL}/auth/refresh`)
            console.log("response from backend", response);


            if (response.data.status === 'ok') {
                setItem(KEY_ACESS_TOKEN, response.data.result.acessToken);
                originalRequest.headers['Authorization'] = `Bearer ${response.data.result.acessToken}`
                return axios(originalRequest)
            }
            else {
                removeItem(KEY_ACESS_TOKEN);
                window.location.replace('/login', '_self')
                return Promise.reject(error)
            }

        }

        return Promise.reject(error);
    }, async (error) => {
        store.dispatch(setLoading(false));
        store.dispatch(showToast({
            type: TOAST_FAILURE,
            message: error.message
        }))
        return Promise.reject(error);
    }
)