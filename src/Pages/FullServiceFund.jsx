import {React,useEffect} from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const FullServiceFund = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <FullServicefundPageWrapper>
    <h1 >Full Service Fund</h1>
    <section>
    At StartConnectHub, we understand that securing funding is one of the most critical challenges for startups. 
    Our comprehensive funding services are designed to support entrepreneurs in every stage of their journey, from initial 
    seed funding to later-stage investments. We connect you with the right investors and provide the resources needed to turn your innovative 
    ideas into successful businesses.
    </section>

    <h2 className='sub-heading'>
    Our Full Fund Services
    </h2>

    <img className = "image" src="fullservicefund.gif"/>
    
    <section>
        <span>
        Capital Raising: 
        </span>
        <p>
        Securing the right amount of capital is critical for startups at all stages. 
        StartConnectHub offers diverse funding options tailored to your specific needs:
        </p>
        <ul>
            <li>
            <span>Venture Capital: </span>Connect with leading venture capital firms that are eager to invest in high-potential startups.
            </li>
            <li>
            <span>Angel Investors :</span>Tap into a network of experienced angel investors who bring not only funds but also mentorship and industry insights.

            </li>
            <li>
            <span>Crowdfunding:</span> Utilize our crowdfunding platform to raise capital from a wide pool of investors while gaining market validation and exposure.
            </li>

        </ul>

    </section>

    <section>
    <span>
    Financial Planning and Strategy:
        </span>
    <p>
    A robust financial plan is essential for sustainable growth. Our financial planning services include:
    </p>
        <ul>
            <li>
            <span>Budgeting and Forecasting: </span>Create detailed budgets and financial forecasts to guide your business decisions and strategy.
            </li>
            <li>
            <span>Cash Flow Management:</span>Ensure your business maintains healthy cash flow to meet operational needs and capitalize on opportunities.
            </li>
            <li>
            <span>Financial Modelling: </span>Develop dynamic financial models to project future performance and evaluate the impact of different business scenarios.
            </li>

        </ul>
    </section>

    <section>
    <span>
    Investment Structuring:
        </span>
    <p>
    Proper structuring of investments can maximize returns and minimize risks. We provide expertise in:
    </p>
        <ul>
            <li>
            <span>Equity Financing: </span>Structure equity deals that align with your business goals and investor expectations.
            </li>
            <li>
            <span>Debt Financing:</span> Explore various debt financing options, including loans and convertible notes, to support your capital requirements.
            </li>
            <li>
            <span>Hybrid Financing:</span> Combine elements of debt and equity to create a customized financing solution that fits your needs
            </li>

        </ul>
        
    </section>

    <section>
    <span>
    Due Diligence:
        </span>
    <p>
    Thorough due diligence is crucial for making informed investment decisions. Our services include:
    </p>
        <ul>
            <li>
            <span>Business Analysis:</span> Conduct comprehensive analyses of business plans, financial statements, and market positioning.
            </li>
            <li>
            <span>Risk Assessment: </span>Identify and evaluate potential risks associated with investments to inform your decision-making process.
            </li>
            <li>
            <span>Compliance Review:</span> Ensure that all investment opportunities meet regulatory and legal standards.
            </li>

        </ul>
    </section>

    <section>
       
    </section>
    <NavLink to="/#contact"><button className='button'> Drop us your Query </button></NavLink>
    
    </FullServicefundPageWrapper>
  )
}
const FullServicefundPageWrapper= styled.div`
padding: 20px;
max-width: 1000px;
margin: 0 auto;
line-height: 1.6;
p{
    font-weight:normal;
}

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
    margin-top:122px;
    font-weight:normal;
    color:rgb(84,114,228);
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

export default FullServiceFund
