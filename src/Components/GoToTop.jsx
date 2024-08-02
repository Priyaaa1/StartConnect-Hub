import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaChevronUp } from "react-icons/fa"; 

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsVisible(currentScrollY > 200); // Change 200 to your desired scroll distance
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <Wrapper onClick={goToTop}>
          <div className="icon-container">
            <FaChevronUp className="top-btn--icon" />
            <FaChevronUp className="top-btn--icon double" />
          </div>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 17px;
  left: 15px;
  color: white;
  background: radial-gradient(circle, navy 0%, #0000ff 100%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background: navy;
    transform: scale(1.1); 
  }

  .icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .top-btn--icon {
    color: white; 
    transition: transform 0.3s ease;
  }

  .top-btn--icon.double {
    margin-top: -8px; 
  }

  &:hover .top-btn--icon {
    transform: translateY(-2px); 
  }

  @media (max-width: 481px) {
    bottom: 68px;
    left: 86%;
  }
`;

export default GoToTop;
