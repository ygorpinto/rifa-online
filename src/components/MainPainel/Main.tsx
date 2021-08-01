import React from 'react';
import MainStyles from './MainStyles';
import mock from '../../mocks.json'

interface Rifa {
    owner?:string,
    number?:string
  };

function Main () { 

    const numberGen = () => {
        
    }

   return (
       <MainStyles>
           <div className="rifasContainer">
           {mock.rifas.map((rifa:Rifa) => {
            return (
                <button>
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
