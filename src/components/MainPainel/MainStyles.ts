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

    position: absolute;
    top: 0;

    z-index: 1000;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    background-color: rgba(0,0,0,0.2);

    .modal-form {

        height:80vh;
        width:80%;

        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;

        border-radius:10px;

        background-color:#fff;
    }
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