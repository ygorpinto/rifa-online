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
      <Animated/>
      <Header/>
    </div>
      <Main/>
    </>
  );
}

export default App;
