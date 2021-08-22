import React from 'react';
import Header from './components/Header/Header';
import Main from './components/MainPainel/Main';
import {createGlobalStyle} from 'styled-components'
import Animated from './components/Animated/Animated';

interface Rifa {
  owner?:string,
  number?:number
};

function App() {

  const GlobalStyles = createGlobalStyle`
  body {
    padding:0;
    margin:0;
    background-image: url('https://i0.wp.com/nileease.com/wp-content/uploads/2020/09/b4581df9e47ce538d21555c94f75da95.gif?fit=1500%2C1000&ssl=1');
  }
  .main {
    display:flex;
  }
  `

  const bringAllData = () => {
    // buscar dados no db
  }

  return (
    <>
    <GlobalStyles/>
    <div className="main">
      <Header/>
    </div>
      <Main/>
    </>
  );
}

export default App;
