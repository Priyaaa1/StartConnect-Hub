import React from 'react';
import styled from 'styled-components';

const Startups = () => {
  return (
    <div>
      <h1>View Startups</h1>
      <Wrapper>
        <div className='wrapper'>
          <i id='left' className='fa-solid fas fa-angle-left'></i>
          <ul className='carousel'>
            <li className='card'>
              <div className='img'>
                <img src='/src/assets/project-2.jpg' alt='' draggable='false' />
              </div>
              <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
                <a href='/startups'>Heartfelt Ventures</a>
              </h2>
              <span>Building Dreams, Bridging Realities</span>
            </li>
            <li className='card'>
              <div className='img'>
                <img src='/src/assets/project-1.PNG' alt='' draggable='false' />
              </div>
              <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
                <a href='/startups'>Understanding United</a>
              </h2>
              <span>Together, We Thrive: Understanding United</span>
            </li>
            <li className='card'>
              <div className='img'>
                <img src='/src/assets/project-3.jpg' alt='' draggable='false' />
              </div>
              <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
                <a href='/startups'>SheSpark Innovations</a>
              </h2>
              <span>Empowering Unity, Empowering Tomorrow</span>
            </li>
            <li className='card'>
              <div className='img'>
                <img src='/src/assets/project-4.jpg' alt='' draggable='false' />
              </div>
              <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
                <a href='/startups'>Hope Phoenix</a>
              </h2>
              <span>Embracing Tomorrow's Promise</span>
            </li>
            <li className='card'>
              <div className='img'>
                <img src='/src/assets/project-5.PNG' alt='' draggable='false' />
              </div>
              <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
                <a href='/startups'>Just Brew</a>
              </h2>
              <span>Turning Ideas into Impact</span>
            </li>
            <li className='card'>
              <div className='img'>
                <img src='/src/assets/project-6.PNG' alt='' draggable='false' />
              </div>
              <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
                <a href='/startups'>EmpowerHer Co.</a>
              </h2>
              <span>Bringing Flavor to Every Bite</span>
            </li>
          </ul>
          <i id='right' className='fa-solid fas fa-angle-right'></i>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;

  .carousel {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: calc((100% / 3) - 12px);
    gap: 16px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    padding-bottom: 20px;
  }

  .carousel::-webkit-scrollbar {
    display: none;
  }

  .card {
    scroll-snap-align: start;
    height: 340px;
    list-style: none;
    background: #fff;
    border-radius: 8px;
    display: flex;
    cursor: pointer;
    width: 98%;
    padding-bottom: 15px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .card:hover,
  .card:focus {
    transform: translateY(-10px);
  }

  .img {
    background: rgb(206, 152, 206);
    width: 145px;
    height: 145px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .img img {
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-radius: 50%;
    border: 4px solid #fff;
  }

  h2 {
    font-weight: 500;
    font-size: 1.5rem;
    margin: 10px 0;
    text-align: center;
  }

  h2 a {
    color: rgb(0, 0, 0);
    text-decoration: none;
  }

  span {
    color: #6a6d78;
    font-size: 1rem;
    text-align: center;
  }

  .fa-angle-left,
  .fa-angle-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 50px;
    width: 50px;
    background: rgb(206, 152, 206);
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.25rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
    color: #fff;
  }

  .fa-angle-left {
    left: -22px;
  }

  .fa-angle-right {
    right: -22px;
  }

  @media screen and (max-width: 900px) {
    .carousel {
      grid-auto-columns: calc((100% / 2) - 9px);
    }
  }

  @media screen and (max-width: 600px) {
    .carousel {
      grid-auto-columns: 100%;
    }
  }
`;

export default Startups;
