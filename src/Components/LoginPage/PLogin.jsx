import React from 'react'
import * as Components from './Components'
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import './PLogin.css'
const PLogin = () => {
    const [signIn, toggle] = React.useState(true);
  return (
    <Components.Container>
    <Components.SignUpContainer signinIn={signIn}>
        <Components.Form>
            <Components.Title>Create Account</Components.Title>
            <Components.Input type='text' placeholder='Name' />
            <Components.Input type='email' placeholder='Email' />
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
             <Components.Title>Sign in</Components.Title>
             <Components.Input type='email' placeholder='Email' />
             <Components.Input type='password' placeholder='Password' />
             <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
             <Components.Button>Sigin In</Components.Button>
              
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