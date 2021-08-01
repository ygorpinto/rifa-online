import React, { useState } from 'react';
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
    const [rifaEl,setRifaEl] = useState({} as Rifa);

    const numberSelector = (rifa:Rifa) => {
        if (window.confirm(`Você selecionou o número ${rifa.number} ?`)) {
            setisOpen(true);
        }  

        setRifaEl(rifa);
    }

    const handleForm = (e: any) => {
        if (e.target.classList[0] === 'modal') {
            setisOpen(!isOpen);
        };
    }


   return (
       <MainStyles>
           {isOpen ? (
               <div className="modal"
               onClick={(e) => handleForm(e)}
               >
                   <div className="modal-form">
                    <h2>Olá {rifaEl.owner}</h2>
                    <h3>Seu nùmero é :</h3>
                    <h1>{rifaEl.number}</h1>
                    <p>Digite no campo abaixo o código que te passamos.</p>
                        <input
                        type="text"
                        placeholder="Digite seu código aqui"
                        ></input>
                    <button>Confirmar</button>
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
