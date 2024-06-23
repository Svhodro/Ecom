
import React, {  useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import app from "../firebase/firebase";
import { ProductContext } from "../contexts/ProductContext";


function Login() {
    const {setuser,setuserdata}=useContext(ProductContext)
    const navigate = useNavigate()
  const notify = () => toast("User Login  Sucsessfull!");
  const errormassage = () => toast("email or password invalid");
   // context 


  // login function

  const HandleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.pass.value;   
    // new function
    const auth = getAuth(app);
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;   
    console.log(user)
    localStorage.setItem('userData',JSON.stringify(user))
    const data=localStorage.getItem('userData')
    
    if (data) {
      setuser(true)
      setuserdata(JSON.parse(data))
    }
    
    notify()
    navigate('/')
    // ...
  })
  .catch((error) => {
   
    errormassage()
  });
  // old function
  
  }

  return (
    <div className="w-full h-screen mt-16">
      <div>

        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col-reverse ">
            <div className="text-center lg:text-left">
           
              <div className="flex justify-center text-2xl">
                <p className="text-base text-slate-400">
                  Create an Account - 
                  <Link to="/reg" className="text-slate-800 hover:underline">
                    {" "}
                    Register
                  </Link>{" "}
                </p>
              </div>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form
                className="card-body"
                onSubmit={(e) => {
                  HandleLogin(e);
                }}
              >
                <div className="w-full flex justify-center items-center py-4 text-2xl font-medium ">
                    <h1>Signin </h1>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="pass"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Login;
