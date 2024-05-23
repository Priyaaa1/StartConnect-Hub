import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Explore.css';
import { NavLink } from 'react-router-dom';

function Explore() {
  return (
    <>
      <div className="explore" id="explore">
        <h1>View Our Services</h1>
      </div>
      <Container className="cardDiv">
        <Row className="justify-content-center">
        <div className="card-container">
          <Col md={4} className="mb-3">
            <div className="card">
            <Card>
             <div className='card-body'>
                 <Card.Body>
              <div className='title'>
                <Card.Title>Investor Management</Card.Title>
                <Card.Text>
                 Reimagining Investor Relations :  Leverage software to drive meaningful, actionable engagement
                </Card.Text>
                </div>
                <div className='button-container'>
                <Button className="button-container" variant="primary" href="/investormanagementpage">
                Know More
                </Button>
                </div>
              </Card.Body>
             </div>
            </Card>
            </div>
          </Col>
          </div>

          <div className="card-container">
          <Col md={4} className="mb-3">
            <div className="card">
            <Card>
             <div className='card-body'>
                 <Card.Body>
              <div className='title'>
                <Card.Title>Financial Services</Card.Title>
                <Card.Text className='card-text'>
                Empowering your business with expert financial solutions. From securing funding to managing investments, 
                we provide the support you need to achieve financial success and drive growth.
                </Card.Text>
                </div>
                <div className='button-container'>
                <Button className="button-container" href="#">
                  Know More
                </Button>
                </div>
              </Card.Body>
             </div>
            </Card>
            </div>
          </Col>
          </div>

          <div className="card-container">
          <Col md={4} className="mb-3">
            <div className="card">
            <Card>
             <div className='card-body'>
                 <Card.Body>
              <div className='title'>
                <Card.Title>Full Service Funds</Card.Title>
                <Card.Text>
                Comprehensive financial solutions tailored to your needs. Our Full Service Funds offer expert guidance on securing funding, investment management, 
                and strategic financial planning to ensure your business thrives and reaches its full potential.
                </Card.Text>
                </div>
                <div className='button-container'>
                <Button className="button-container" variant="primary" href="#">
                Know More
                </Button>
                </div>
              </Card.Body>
             </div>
            </Card>
            </div>
          </Col>
          </div>
          
        </Row>
      </Container>
    </>
  );
}

export default Explore;

