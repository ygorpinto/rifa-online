import React from 'react';
import styled from 'styled-components'

const MainStyles = styled.div`

height:80vh;
width:100%;

display:flex;
align-items:center;
flex-direction:column;

font-family: 'Nunito', sans-serif;

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

        input {
            height:2rem;
            width:15rem;
            
            border-radius:6px;
            border: 1px 1px solid rgba(0,0,0,0.1);

            &::placeholder {
                text-align: center;
                font-family: 'Nunito', sans-serif;
            }
        }

        button {
            height:2rem;
            width:5rem;
        }
    }
}

button {
    
    width:4rem;
    
    font-family: 'Nunito', sans-serif;

    font-weight: 700;

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