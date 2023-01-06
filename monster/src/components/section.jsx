import React from 'react';
import styled from "styled-components"


const section = () => {
    return (
        <Wrap>
            Section
        </Wrap>
    );
};

export default section;

const Wrap = styled.div `
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-image: url(' ./public/images/Tesla-a.jpg ');
`