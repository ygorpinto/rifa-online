import React, { useEffect, useState } from 'react';
import MainStyles from './MainStyles';
import Animated from '../Animated/Animated';
import Loading from '../Loading/Loading';
import api from '../../api/api';


interface Rifa {
    owner?:string,
    number?:number
  };

function Main () { 

    const [isOpen, setisOpen] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [rifaEl,setRifaEl] = useState<any>([]);
    const [rifaInstance, setRifaInstance] = useState({} as Rifa);

    const [name, setName] = useState<any>('');
    const [number,setNumber] = useState<any>(null);
    const [cod,setcod] = useState<any>('');


    useEffect(()=>{
        bringAll();
    },[])


    // trará os dados da api, números e informações da API-rails

    const bringAll = async () => {
        const res = await api.get('/')
        const data = await res.data
        setRifaEl(data)
    }

    const numberSelector = (rifa:Rifa) => {
        if (window.confirm(`Você selecionou o número ${rifa.number} ?`)) {
            setisOpen(true);
            const nome = window.prompt('Digite seu nome ..')
            setName(nome)
        } 

        setRifaInstance(rifa);
    }

    const handleForm = (e: any) => {
        if (e.target.classList[0] === 'modal') {
            setisOpen(!isOpen);
        };
    }

    // other place
    const sorteio = () => {
        alert(`numero sorteado foi ${(Math.floor(100 * Math.random()))}`)
    } 

    const confirm = () => {
        // TODO confirm cod..
        setisLoading(!isLoading);
        setTimeout(() => {
            setisLoading(false);
        }, 2000);

        setisOpen(!isOpen);
    }

   return (
       <MainStyles>
           {isLoading ? (<Loading/>) : (null)}
           {isOpen ? (
               <div className="modal"
               onClick={(e) => handleForm(e)}
               >
                   <div className="modal-form">
                    <h2>Olá {name}</h2>
                    <h3>Seu nùmero é :</h3>
                    <h1>{rifaInstance.number}</h1>
                    <p>Digite no campo abaixo o código que te passamos, para confirmarmos você no sorteio.</p>
                        <input
                        type="text"
                        placeholder="Digite seu código aqui"
                        ></input>
                    <button
                    onClick={confirm}
                    >Confirmar</button>
                   </div>
               </div>
           ) : (null)}
           <div className="rifasContainer">
           <div className="block">
                <Animated/>
           </div>
           <div className="numbers">
                 {rifaEl?.map((rifa:Rifa, index:number) => {
                   return (
                       <button 
                       key={index}
                       onClick={() => numberSelector(rifa)}>
                           <p>{rifa.number}</p>
                       </button>
                       )   
                  })}
                </div>
            </div>  
       </MainStyles>
   ) 
}

export default Main;
