import React, { useState } from 'react'
import * as Components from './Components'
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import './PLogin.css'
import { Navigate, useNavigate } from 'react-router-dom';
const PLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warnings, setWarnings] = useState({ email: "" });
  const navigate = useNavigate();

  const handleLogin = () => {
    let emailWarning = "";

    if (!email) {
      emailWarning = "*Please enter your email";
    } else if (!validateEmail(email)) {
      emailWarning = "*Please enter a valid email address!";
    }

    setWarnings({ email: emailWarning });

    if (email && validateEmail(email)) {
      console.log("Logging in with email:", email);
      navigate("/explore");
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  const [signIn, toggle] = React.useState(true);
  return (
    <Components.Container>
    <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
            <Components.Title className='createacc-title'>Create Account</Components.Title>
            <Components.Input type='text' placeholder='Name' />
            <Components.Input type='email' placeholder='Email'  />
            <Components.Input type='password' placeholder='Password' />
            <Components.Button>Sign Up</Components.Button>
            <div className="google-login-container">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const credentialDecoded = jwtDecode(credentialResponse.credential);
              console.log(credentialDecoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            render={renderProps => (
              <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="google-login-button">
                <span className="google-icon">
                  <AiOutlineEye />
                </span>
                Sign in with Google
              </button>
            )}
          />
        </div>
        </Components.Form>
    </Components.SignUpContainer>

    <Components.SignInContainer signinIn={signIn}>
         <Components.Form>
             <Components.Title className="signin-title">Sign in</Components.Title>
             <Components.Input type='email' placeholder='Email'
             value={email}
             onChange={(e) => {
               setEmail(e.target.value);
               setWarnings({ email: validateEmail(e.target.value)? "" : "*Please enter a valid email address!" });
             }} />
               {warnings.email && <p style={{ color: "red" }} className="warningmsg">{warnings.email}</p>}

             <Components.Input type='password' placeholder='Password'
             value={password}
             onChange={(e) => setPassword(e.target.value)} />
             <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
             <Components.Button onClick={handleLogin}>Sigin In</Components.Button>
              
             <div className="google-login-container">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const credentialDecoded = jwtDecode(credentialResponse.credential);
              console.log(credentialDecoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            render={renderProps => (
              <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="google-login-button">
                <span className="google-icon">
                  <AiOutlineEye />
                </span>
                Sign in with Google
              </button>
            )}
          />
        </div>

             
         </Components.Form>
    </Components.SignInContainer>

    <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>

        <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
                To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
            </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                  Enter Your personal details and start journey with us
              </Components.Paragraph>
                  <Components.GhostButton onClick={() => toggle(false)}>
                      Sigin Up
                  </Components.GhostButton> 
                  
            </Components.RightOverlayPanel>

        </Components.Overlay>
    </Components.OverlayContainer>
    
</Components.Container>
  )
}

export default PLogin