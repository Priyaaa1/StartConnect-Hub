import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";

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
          <FaArrowUp className="top-btn--icon" />
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
@media (max-width:481px){
display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 68px;
  left: 86%;
  color: white;
  background-color: blue;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #007bff;
  }}
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 17px;
  left: 85px;
  color: white;
  background-color: blue;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #007bff;
  }
`;

export default GoToTop;
