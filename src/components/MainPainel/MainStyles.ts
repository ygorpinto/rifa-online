import React from 'react';
import styled from 'styled-components'

const MainStyles = styled.div`

height:75vh;
width:100%;

align-items:center;
flex-wrap: wrap;

font-family: 'Nunito', sans-serif;

.rifasContainer {

    display: flex;
    width: 100%;

    .block {
        align-items: center;
        justify-content: center;
        width: 50%;

        img {
            margin-left: 8rem;
        }
    }

    .numbers {

        height: 60vh;

        margin-left: 4rem;

        display: grid;
        grid-template-columns: repeat(10, 1fr);
        grid-template-rows: repeat(10, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
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
    
    width:2rem;
    height:2rem;

    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    
    font-family: 'Nunito', sans-serif;

    font-weight: 700;

    background-color:#fff;
    border-radius:6px;
    border:2px 2px solid rgba(0,0,0,0.3);
    margin:0.4rem;

    &:hover {

        background-color:#E56DA5;
        color:#fff;
    }
}

`

export default MainStyles;