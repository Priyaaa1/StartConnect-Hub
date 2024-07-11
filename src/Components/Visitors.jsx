import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Visitors = () => {
    const [visits, setVisits] = useState(() => {
        const storedVisits = Number(localStorage.getItem("visitCounter")) || 0;
        return storedVisits;
    });

    useEffect(() => {
        if (!sessionStorage.getItem("visitIncremented")) {
            const newVisitCount = visits + 1;
            setVisits(newVisitCount);
            localStorage.setItem("visitCounter", newVisitCount);
            sessionStorage.setItem("visitIncremented", "true");
        }
    }, []);

    return (
        <VisitorButton>
            <StyledSVG
                height="20px"
                width="20px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 80.794 80.794"
                xmlSpace="preserve"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <g>
                        <g>
                            <path d="M79.351,38.549c-0.706-0.903-17.529-22.119-38.953-22.119c-21.426,0-38.249,21.216-38.955,22.119L0,40.396l1.443,1.847 c0.706,0.903,17.529,22.12,38.955,22.12c21.424,0,38.247-21.217,38.953-22.12l1.443-1.847L79.351,38.549z M40.398,58.364 c-15.068,0-28.22-13.046-32.643-17.967c4.425-4.922,17.576-17.966,32.643-17.966c15.066,0,28.218,13.045,32.642,17.966 C68.614,45.319,55.463,58.364,40.398,58.364z"></path>
                            <path d="M40.397,23.983c-9.052,0-16.416,7.363-16.416,16.414c0,9.053,7.364,16.417,16.416,16.417s16.416-7.364,16.416-16.417 C56.813,31.346,49.449,23.983,40.397,23.983z M40.397,50.813c-5.744,0-10.416-4.673-10.416-10.417 c0-5.742,4.672-10.414,10.416-10.414c5.743,0,10.416,4.672,10.416,10.414C50.813,46.14,46.14,50.813,40.397,50.813z"></path>
                        </g>
                    </g>
                </g>
            </StyledSVG>
            <span>Visitors count: {visits}</span>
        </VisitorButton>
    );
};

const zoomAnimation = keyframes`
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
`;

const blinkAnimation = keyframes`
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
`;

const VisitorButton = styled.div`
    display: flex;
    align-items: center;
    background-color: navy;
    color: white;
    padding: 10px 11px;
    border: none;
    border-radius: 25px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: 	#000066;
        svg {
            animation: ${zoomAnimation} 0.8s ease-out forwards, ${blinkAnimation} 1.5s linear 0.5s 1;
        }
    }
`;

const StyledSVG = styled.svg`
    margin-right: 10px;
    fill: white;
`;

export default Visitors;
