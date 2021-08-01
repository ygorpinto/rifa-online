import React from 'react';
import styled from 'styled-components'

const MainStyles = styled.div`

height:80vh;
width:100%;

display:flex;
align-items:center;
flex-direction:column;

.rifasContainer {

    margin-top: 4rem;
    
    height:80vh;
    width:69%;
    
    flex-wrap: wrap;
}


.modal {

    height:100vh;
    width:100%;

    z-index: 1000;
    display:flex;
    align-items:center;
    flex-direction:column;
}

button {

    background-color:#fff;
    border-radius:6px;
    border:2px 2px solid rgba(0,0,0,0.3);
    margin:1rem;

    &:hover {

        background-color:#bb94c0;
        color:#fff;
    }
}

`

export default MainStyles;