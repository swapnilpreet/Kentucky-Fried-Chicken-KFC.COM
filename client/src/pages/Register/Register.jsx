import React, { useState } from 'react'
import "./regusterstyle.css";
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { SetLoader} from '../../Redux/loaderSlice';
import { RegisterUser } from '../../ApiCalls/User';
import {message} from 'antd';
import  Header  from '../../components/Header';
import Divider from '../../components/Divider';



const Register = () => {
    const [customerSignUp, setCustomerSignUp] = useState(
        { email: '', password: '', firstname: '', lastname: ''}
    );
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleChange = (event) => {
        setCustomerSignUp({...customerSignUp, [event.target.name]: event.target.value})
    }

    const registerUserHandle=async(event)=>{
        event.preventDefault();
        // console.log(customerSignUp)
        try {
            dispatch(SetLoader(true))
            const response = await RegisterUser(customerSignUp);
            dispatch(SetLoader(false))
            if(response.success){
                navigate('/login')
                message.success(response.message)
                setCustomerSignUp({email:"",password:"",firstname:"",lastname:""})
                
            }else{
                throw new Error(response.message)
            }
        } catch (error) {
            dispatch(SetLoader(false))
            message.error(error.message)
        }
    }
  return (
    <div>
        <Header/>
        <section className="w-[25rem] max-h-screen m-auto mt-8 mb-14 rounded-lg shadow-2xl mobile:w-[21rem] tablet:w-[25rem]">
        <div className="box-1">
          <div className="signupsvgdiv2">
            <svg
              id="signupsvgStrip"
              viewBox="0 0 42 20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path className="strip-1" d="M0 0h8v20H0z"></path>
              <path className="strip-2" d="M16 0h8v20h-8z"></path>
              <path className="strip-3" d="M32 0h8v20h-8z"></path>
            </svg>
          </div>
        </div>
        {/* container */}
        <div className="input-container">
          <h1 className='text-center tracking-wide  '>CREATE AN ACCOUNT</h1>
          <div className="form-div">
            <form onSubmit={registerUserHandle} className="signupform">
             
              <div className="input-data">
                <input
                  type="text"
                  name="firstname" value={customerSignUp.firstname} onChange={handleChange} required
                />
                {/* <div className="underline"></div> */}
                <label>First Name</label>
              </div>
               <Divider/>
              {/* <div id="signuperrorBox"></div> */}
              <div className="input-data">
                <input
                  type="text"
                  name="lastname" value={customerSignUp.lastname} onChange={handleChange} required
                />
                {/* <div className="underline"></div> */}
                <label>Last Name</label>
              </div>
 

              {/* <div id="signuperrorBox"></div> */}
              <Divider/>
              <div className="input-data">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={customerSignUp.email} onChange={handleChange} required
                />
                {/* <div className="underline"></div> */}
                <label>Email</label>
              </div>

              {/* <div id="signuperrorBox"></div> */}
              <Divider/>

              <div className="input-data">
                <input
                  type="password"
                  id="password"
                  name="password" value={customerSignUp.password} onChange={handleChange} required
                />
                {/* <div className="underline"></div> */}
                <label>Password</label>
              </div>

              {/* <div id="signuperrorBox"></div> */}
              <Divider/>

              <div className="check-box-div">
                <div className="check-Box-flex">
                  <div className="check-Box-2">
                    <input type="checkbox" name="checkbox" className="check-tick" />
                  </div>
                  <div className="check-Box-Text">
                    <p>
                      By selecting the box, you agree to our{" "}
                      <b>Privacy Policy</b> and{" "}
                      <b>Terms of Use.</b>
                    </p>
                  </div>
                </div>
                <div className="check-Box-flex">
                  <div className="check-Box-Div">
                    <input type="checkbox" name="checkbox" className="check-tick" />
                  </div>
                  <div className="check-Box-Text">
                    <p>Sign up for Email updates and Promotions</p>
                  </div>
                </div>
              </div>
              <div className="signupBtndiv">
                <input type="submit" value="Create Account" />
              </div>
              <div className="redirecttologin">
                <p className="redirectlogintext">
                  Already a member ?{" "}
                  <Link to={"/login"}>
                    <span className="redirectloginlink">Log In</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register