import React , {useState} from 'react'
import axios from "axios";
import './Login.css'
import { Alert } from 'react-bootstrap';

export default function Login() {
    const [errorMessage, seterrorMessage] = useState('Incorrect Credentials. Please try again!')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginSuccess, setisLoginSuccess] = useState(true)
    // Create the submit method.
    const submit = async e => {
        e.preventDefault();
        const user = {
              username: username,
              password: password
              };
        // Create the POST requuest
        try {
          const {data} = await axios.post('http://localhost:8000/token/',user ,{headers: {'Content-Type': 'application/json'}});
          // Initialize the access & refresh token in localstorage.      
          localStorage.clear();
          localStorage.setItem('access_token', data.access);
          localStorage.setItem('refresh_token', data.refresh);
          axios.defaults.headers.common['Authorization'] = 
                                          `Bearer ${data['access']}`;
          window.location.href = '/home'
        }
        catch(e){
          setisLoginSuccess(false)
          if (e.request) {
            // Request was made but no response was received
            seterrorMessage('Network Error: No response from server.');
          }
          
        }
        
  }
  return (
    <div>
      <div className="wrapper">
        {isLoginSuccess === false && <Alert key='danger' variant='danger' dismissible>
          {errorMessage}
        </Alert>}
      <h1>Book Your Travel Now!</h1>
        <div className="container main_">
          <div className="row" id='row'>
            <div className="col-md-6 side-image">
                <div className="text_">
                    <p className='fw-semibold fs-3'>Welcome To <br/> Book My Travel</p>
                </div>
            </div>
            <div className="col-md-6 right">
                  <form className="input-box" onSubmit={submit}>
                    <header className='fs-3'>Sign In</header>
                    <div className='input-field'>
                        <input type='text' className='input_' id='username' required autoComplete='off' onChange={e => setUsername(e.target.value)}/>
                        <label htmlFor="username" className='text-uppercase'>username</label>
                    </div>
                    <div className='input-field'>
                        <input type='password' className='input_' id='password' required autoComplete='off' onChange={e => setPassword(e.target.value)}/>
                        <label htmlFor="password" className='text-uppercase'>password</label>
                    </div>
                    <div className='input-field'>
                        <input type='submit' className='submit_' value='Log In'/>
                    </div>
                    <div className="SignIn">
                      <span className='span'>Don't have an account?<a href="/register"> Register Here</a></span>
                    </div>
                  </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
