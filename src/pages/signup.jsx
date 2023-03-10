import React from 'react';
import {useEffect} from 'react';
import SignUpBox from '../components/signUpBox';
import './loginSignUp.css';
import '../components/navbar.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  useEffect(() => {
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80')";
    document.body.style.backgroundSize = "cover";
    
    return () => {
      document.body.style.backgroundImage = 'none';
    };

  }, []);

  const navigate = useNavigate();
    useEffect(() => {
        async function useAuth() {
          await axios.get('https://ftd-server.herokuapp.com/user/protected', { withCredentials: true }).then((res) => {
            if (res.data === true) {
              navigate("/dashboard");
            }
          })  
        }
        useAuth();
      }, []);

  return (
    <div>
      <SignUpBox />
    </div>
  );
}

export default Signup;
