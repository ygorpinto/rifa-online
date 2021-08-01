import React, { useRef, useState } from 'react';
import MainStyles from './MainStyles';
import mock from '../../mocks.json'


interface Rifa {
    owner?:string,
    number?:string
  };

function Main () { 

    const [isOpen, setisOpen] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [isSelected, setisSelected] = useState(false);


    const numberSelector = (rifa:Rifa) => {
        if (window.confirm(`Você selecionou o número ${rifa.number} ?`)) {
            setisOpen(true);
        }  
    }

    const handleForm = (e: any) => {
        if (e.classList[0] === 'modal') {
            setisOpen(!isOpen);
        };
    }


   return (
       <MainStyles>
           {isOpen ? (
               <div className="modal"
               onClick={(e) => handleForm(e.target)}
               >
                   <div className="modal-form">
                        <input
                        type="text"
                        placeholder="Digite seu código aqui"
                        ></input>
                   </div>
               </div>
           ) : (null)}
           <div className="rifasContainer">
           {mock.rifas.map((rifa:Rifa, index:number) => {
            return (
                <button 
                key={index}
                onClick={() => numberSelector(rifa)}>
                    <p>{rifa.owner}</p>
                    <p>{rifa.number}</p>
                </button>
                )   
           })}
           </div>
       </MainStyles>
   ) 
}

export default Main;
