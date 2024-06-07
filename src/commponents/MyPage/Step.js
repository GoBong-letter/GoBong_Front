import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
    position: absolute;
    display: flex;
    column-gap: 2vw;
    bottom: 15vw;
`;

const Dot = styled.div`
    width: 7px;
    height: 7px;
    background-color: ${(props) => props.active ? 'var(--primary-color)' : 'var(--gray)'};
    border-radius: 100%;
    cursor: pointer;
`;

export default function Step() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleDotClick = (path) => {
        navigate(path);
    };

    return (
        <Container>
            <Dot active={location.pathname === "/guideline"} onClick={() => handleDotClick("/guideline")}></Dot>
            <Dot active={location.pathname === "/guidelineTwo"} onClick={() => handleDotClick("/guidelineTwo")}></Dot>
            <Dot active={location.pathname === "/guidelineThree"} onClick={() => handleDotClick("/guidelineThree")}></Dot>
            <Dot active={location.pathname === "/guidelineLast"} onClick={() => handleDotClick("/guidelineLast")}></Dot>
        </Container>
    );
}
