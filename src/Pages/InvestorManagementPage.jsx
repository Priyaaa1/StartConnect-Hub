import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const InvestorManagementPage = () => {
  return (
    <ManagementPageWrapper>
    <h1>Investor Management</h1>
    <section>
    Welcome to the Investor Management page at StartConnectHub. 
    Our mission is to create a thriving ecosystem where entrepreneurs and investors can come together to turn ideas into reality. 
    We understand the challenges that startups face, from securing funding to navigating the complexities of the business world. 
    With our platform, entrepreneurs can bring their visions to life and take their businesses to new heights.
    </section>

    <a href="/startups">
    <button className = "button-container">View StartUps</button>
    </a>
    
    <h2 className='sub-heading'>
    Why Choose StartConnectHub?
    </h2>

    <img className = "image" src="whychooseus.gif"/>
    
    <section>
        <span>
        Fostering Innovation and Collaboration:
        </span>  At StartConnectHub, our commitment to fostering innovation and collaboration drives everything we do. 
        We believe that by providing the right resources and support, we can empower individuals to pursue their passions and create lasting change.
       Our platform is designed to connect visionary entrepreneurs with savvy investors, creating a synergistic environment 
       where groundbreaking ideas can flourish.
    </section>

    <section>
        <span>
        Exclusive Access to Promising Startups:
        </span>  Investors at StartConnectHub gain exclusive access to a curated selection of high-potential startups. 
        Our rigorous vetting process ensures that only the most promising ventures are showcased, 
        giving you the opportunity to invest in businesses with strong growth potential. 
        Whether you're looking for early-stage startups or more established ventures, 
        StartConnectHub provides a diverse range of investment opportunities.
    </section>

    <section>
        <span>
        Comprehensive Support and Resources:
        </span>  We understand that successful investments require more than just capital. 
        That's why StartConnectHub offers comprehensive support and resources to both entrepreneurs and investors. 
        From detailed business analysis and market research to strategic advisory services, 
        we provide the tools and insights needed to make informed investment decisions.
    </section>

    <NavLink to="/#contact"><button className='button'> Drop us your Query </button></NavLink>
    
    </ManagementPageWrapper>
  )
}
const ManagementPageWrapper= styled.div`
padding: 20px;
max-width: 1000px;
margin: 0 auto;
line-height: 1.6;

.button{
    background-color:#8a8f95;
    height:51px;
    display:flex-end;
    margin:auto;
}
.button:hover{
    background-color:#464e57;
}
img{
    background:transparent;
    display: block;
    margin: 0 auto;
    width: 35%;
    padding-bottom:50px;
}

section{
    font-size:medium;
    padding-bottom:60px;
}

span{
    font-weight:semi-bold;
    color:rgb(84,114,228);
    font-size:large;
}
h1{
    padding:45px;
    text-align:center;
    color:rgb(84,114,228);
    margin-top:122px;
    font-weight:normal;
}
h2{
    text-align:left;
}
.sub-heading{
    font-weight:normal;
    padding:45px;
    text-align:center;
    color:rgb(84,114,228);
    margin-top:20px;

}

`

export default InvestorManagementPage
