import axios from "axios";
import host from './Host';

let refresh = false;
axios.interceptors.response.use(resp => resp, async error => {
  if (error.response.status === 401 && !refresh) {
     refresh = true;
     console.log(localStorage.getItem('refresh_token'))
     const response = 
           await axios.post(`${host}/token/refresh/`,{refresh: localStorage.getItem('refresh_token')} ,{headers: {Authorization: `Bearer ${localStorage.getItem('access_token')}`}});
    if (response.status === 200) {
       axios.defaults.headers.common['Authorization'] = `Bearer 
       ${response.data['access']}`;
       localStorage.setItem('access_token', response.data.access);
       localStorage.setItem('refresh_token', response.data.refresh);
       return axios(error.config);
    }
  }
    refresh = false;
    return error;
});