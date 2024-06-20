// // import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import './Explore.css';  // Ensure this import statement is present

// function Explore() {
//   return (
//     <>
//       <div className="explore" id="explore">
//         <div className="header-container">
//           <img src="bridge_round.jpg" alt="Service Image" className="header-image" />
//           <h1>View Our Services</h1>
//         </div>
//       </div>

//       <Container className="cardDiv">
//         <Row className="justify-content-center">
//         {/* <div style={{ display: "flex", justifyContent: "center", margin: "10px", gap: "20px" }}>
//   <div className="card-container" style={{ flex: 1, margin: "30px", maxWidth: "45%" }}> */}
//     <Col md={4} className="mb-3">
//       <div className="card">
//         <Card>
//           <div className="card-body">
//             <Card.Body>
//               <div className="title">
//                 <Card.Title>Investor Management</Card.Title>
//                 <Card.Text>
//                   Reimagining Investor Relations: Leverage software to drive meaningful, actionable engagement.
//                 </Card.Text>
//               </div>
//               <div className="button-container">
//                 <NavLink to="/investormanagementpage">
//                   <Button className="button-container" variant="primary">
//                     Know More
//                   </Button>
//                 </NavLink>
//               </div>
//             </Card.Body>
//           </div>
//         </Card>
//       </div>
//     </Col>
//   {/* </div> */}

//   {/* <div className="card-container" style={{ flex: 1, margin: "10px", maxWidth: "45%" }}> */}
//     <Col md={4} className="mb-3">
//       <div className="card">
//         <Card>
//           <div className="card-body" >
//             <Card.Body>
//               <div className="title">
//                 <Card.Title>Financial Services</Card.Title>
//                 <Card.Text className="card-text" >
//                   Empowering your business with expert financial solutions. From securing funding to managing investments, we provide the support you need to achieve financial success and drive growth.
//                 </Card.Text>
//               </div>
//               <div className="button-container">
//                 <NavLink to="/financialservicesPage">
//                   <Button className="button-container">
//                     Know More
//                   </Button>
//                 </NavLink>
//               </div>
//             </Card.Body>
//           </div>
//         </Card>
//       </div>
//     </Col>
//   {/* </div>
// </div>

//           <div className="card-container"> */}
//             <Col md={4} className="mb-3">
//               {/* <div className="card"> */}
//                 <Card>
//                   <div className='card-body'>
//                     <Card.Body>
//                       <div className='title'>
//                         <Card.Title>Full Service Funds</Card.Title>
//                         <Card.Text>
//                           Comprehensive financial solutions tailored to your needs. Our Full Service Funds offer expert guidance on securing funding, investment management, and strategic financial planning to ensure your business thrives and reaches its full potential.
//                         </Card.Text>
//                       </div>
//                       <div className='button-container'>
//                         <NavLink to="/fullservicefund">
//                           <Button className="button-container" variant="primary">
//                             Know More
//                           </Button>
//                         </NavLink>
//                       </div>
//                     </Card.Body>
//                   </div>
//                 </Card>
//               {/* </div> */}
//             </Col>
//           {/* </div> */}
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default Explore;
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Explore.css'; // Ensure this import statement is present

function Explore() {
  return (
    <>
      <div className="explore" id="explore">
        <div className="header-container">
          <img src="bridge_round.jpg" alt="Service Image" className="header-image" />
          <h1>View Our Services</h1>
        </div>
      </div>

      <Container className="cardDiv">
        {/* <Row className="justify-content-center"> */}
          <Col md={4} className="mb-3">
            
              <Card>
                <div className="card-body">
                  <Card.Body>
                    <div className="title">
                      <Card.Title>Investor Management</Card.Title>
                      <Card.Text>
                        Reimagining Investor Relations: Leverage software to drive meaningful, actionable engagement.
                      </Card.Text>
                    </div>
                    <div className="button-container">
                      <NavLink to="/investormanagementpage">
                        <Button className="button-container" variant="primary">
                          Know More
                        </Button>
                      </NavLink>
                    </div>
                  </Card.Body>
                </div>
              </Card>
          </Col>

          <Col md={4} className="mb-3">
            
              <Card>
                <div className="card-body">
                  <Card.Body>
                    <div className="title">
                      <Card.Title>Financial Services</Card.Title>
                      <Card.Text className="card-text">
                        Empowering your business with expert financial solutions. From securing funding to managing
                        investments, we provide the support you need to achieve financial success and drive growth.
                      </Card.Text>
                    </div>
                    <div className="button-container">
                      <NavLink to="/financialservicesPage">
                        <Button className="button-container">Know More</Button>
                      </NavLink>
                    </div>
                  </Card.Body>
                </div>
              </Card>
            
          </Col>
        {/* </Row> */}
        {/* <Row className="justify-content-center"> */}
          <Col md={4} className="mb-3">
            
              <Card>
                <div className="card-body">
                  <Card.Body>
                    <div className="title">
                      <Card.Title>Full Service Funds</Card.Title>
                      <Card.Text>
                        Comprehensive financial solutions tailored to your needs. Our Full Service Funds offer expert guidance on securing funding, investment management, and strategic financial planning to ensure your business thrives and reaches its full potential.
                      </Card.Text>
                    </div>
                    <div className="button-container">
                      <NavLink to="/fullservicefund">
                        <Button className="button-container" variant="primary">
                          Know More
                        </Button>
                      </NavLink>
                    </div>
                  </Card.Body>
                </div>
              </Card>
            
          </Col>
        {/* </Row> */}
      </Container>
    </>
  );
}

export default Explore;
