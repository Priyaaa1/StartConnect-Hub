import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

const Startups = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    const dragStart = (e) => {
      setIsDragging(true);
      carousel.classList.add("dragging");
      setStartX(e.pageX);
      setStartScrollLeft(carousel.scrollLeft);
    };

    const dragging = (e) => {
      if (!isDragging) return;

      const deltaX = e.pageX - startX;
      carousel.scrollLeft = startScrollLeft - deltaX;
    };

    const dragStop = () => {
      setIsDragging(false);
      carousel.classList.remove("dragging");
    };

    const autoPlay = () => {
      if (window.innerWidth < 800) return;

      const totalCardWidth = carousel.scrollWidth;
      const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

      if (carousel.scrollLeft >= maxScrollLeft) return;

      setTimeoutId(setTimeout(() => {
        carousel.scrollLeft += carousel.offsetWidth;
      }, 2500));
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
    carousel.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    carousel.addEventListener("mouseleave", autoPlay);

    return () => {
      carousel.removeEventListener("mousedown", dragStart);
      carousel.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", dragStop);
      carousel.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
      carousel.removeEventListener("mouseleave", autoPlay);
    };
  }, [carouselRef, isDragging, startX, startScrollLeft, timeoutId]);

  return (
    <div>

      <Wrapper>
      <h1 >View Startups</h1>
        <div className='wrapper'>
          <i className='fa-solid fas fa-angle-left'><GoChevronLeft /></i>
          <ul ref={carouselRef} className='carousel'>
          <a href='/heartfeltventures'><li className='card'>
              <div className='img'>
                <img src="project-2.jpg" alt='' draggable='false' />
              </div>
              <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
                Heartfelt Ventures
              </h2>
              <span>Building Dreams, Bridging Realities</span>
            </li></a>
            <a href='/understandingunited'><li className='card'>
              <div className='img'>
                <img src="project-1.PNG" alt='' draggable='false' />
              </div>
              <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
                Understanding United
              </h2>
              <span>Together, We Thrive: Understanding United</span>
            </li></a>
            <a href='/shespark'><li className='card'>
              <div className='img'>
                <img src="project-3.jpg" alt='' draggable='false' />
              </div>
              <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
                SheSpark Innovations
              </h2>
              <span>Empowering Unity, Empowering Tomorrow</span>
            </li></a>
            <a href='/hopephoenix'><li className='card'>
              <div className='img'>
                <img src="project-4.jpg" alt='' draggable='false' />
              </div>
              <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
                Hope Phoenix
              </h2>
              <span>Embracing Tomorrow's Promise</span>
            </li></a>
            <a href='/justbrew'><li className='card'>
              <div className='img'>
                <img src="project-5.PNG" alt='' draggable='false' />
              </div>
              <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
                Just Brew
              </h2>
              <span>Turning Ideas into Impact</span>
            </li></a>
            <a href='/empowerher'><li className='card'>
              <div className='img'>
                <img src="project-6.PNG" alt='' draggable='false' />
              </div>
              <h2 style={{ color: 'rgb(0, 0, 0)', fontWeight: 'bold' }}>
                EmpowerHer Co.
              </h2>
              <span>Bringing Flavor to Every Bite</span>
            </li></a>
          </ul>
          <i id='right' className='fa-solid fas fa-angle-right'><GoChevronRight /></i>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  padding: 50px;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  background-color: #f8f8f8 ;

  h1{
    padding: 20px ;
    text-align: center;
    align-items: center;
    text-decoration: underline;
  }

  .carousel {
    padding: 20px;
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
