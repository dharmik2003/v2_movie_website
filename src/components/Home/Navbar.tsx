import React, { useEffect } from 'react'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { IoMdNotificationsOutline } from "react-icons/io";
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from './../Redux/store/store';
import { setLogin } from './../Redux/Slice/LoginSlice';
import { setsignup } from './../Redux/Slice/SignupSlice';


const Navbar= () => {
    const usenavigate=useNavigate()

const handleLoginClick = () => {
    usenavigate('/login');
  };

const dispatch = useDispatch();

/* Signup state value change */
const handlesignupStateLogoutClick=()=>{
    dispatch(setsignup(false));
    usenavigate('/login');
    
}

/* login state value change */
const handleloginStateLogoutClick=()=>{
    dispatch(setLogin(false));
    usenavigate('/login');

}

//   const loginState = useSelector((state: RootState) => state.login.loginState);
//   const signupState = useSelector((state: RootState) => state.signup.SignupState);
//   const { loginname} = useSelector((state: RootState) => state.sign);
//   const {sigunupname} = useSelector((state: RootState) =>state.signup.Signupstate);

//   if(loginname || sigunupname){

     
//   }

/*fetch value*/
const loginState = useSelector((state: RootState) => state.login.loginState);
const signupState = useSelector((state: RootState) => state.sign.SignupState);

    console.log('Login State:', loginState);
    console.log('Signup State:', signupState);

/*fetch name */
const loginname = useSelector((state: RootState) => state.login.name);
const signupname = useSelector((state: RootState) => state.sign.name);


console.log('Login :', loginname);
    console.log('Signup :', signupname);
//   useEffect(() => {
//     console.log('Login State:', loginState);
//     console.log('Signup State:', signupState);
//   }, [loginState, signupState]);


    return (
    <div>
          <div className="navbar">
            <div className="leftpartnav">
                <img src="https://github.com/dharmik2003/poster_movie/blob/main/Navbar/tix%20id%201.png?raw=true"/>
            </div>  

            <div className="rightpartnav">
                <div className="nav-text">
                    {/* <a href="">Home</a> */}
                    <NavLink to="/">Home</NavLink>
                </div>
                <div className="nav-text second">
                    <a href="">Tiket Saya</a>
                </div>
                <div className="nav-text third">
                    <a href="">TIX ID News</a>
                </div>
                
                <div className="navicon nav-text">
                    <a href=""><IoMdNotificationsOutline className='notifIcon' /></a>
                </div>

                {/* <div className="circle">
                    D
                </div> */}

                {loginState || signupState ? (
                    // <div className='home-nav-Login-but' onClick={handleLogoutClick}>
                    //     <h4 className='home-nav-login-text'></h4>
                    // </div>
                    <div>
        
                        {loginState ? (
                                

                                     <div className='home-nav-Login-but' onClick={handleloginStateLogoutClick}>
                                        <h4 className='home-nav-login-text'>  {loginname && loginname.charAt(0).toUpperCase()}</h4>
                                     </div>
                                 
                                
                        ) : (
                               
                                    <div className='home-nav-Login-but' onClick={handlesignupStateLogoutClick}>
                                        <h4 className='home-nav-login-text'>  {signupname && signupname.charAt(0).toUpperCase()}</h4>
                                     </div>
                                        // First Character (Signup): {signupname && signupname.charAt(0).toUpperCase()}
                                
                        )}
                     </div>
                ) : (
                    <div className='home-nav-Login-but' onClick={handleLoginClick}>
                        <h4 className='home-nav-login-text'>Log In</h4>
                    </div>
                )}
                   
            </div>
        </div>
    </div>
  )
}

export default Navbar