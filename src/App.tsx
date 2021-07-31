import React from 'react';
import Header from './components/Header/Header';
import Main from './components/MainPainel/Main';

interface Rifa {
  owner?:string,
  number?:number
};

function App() {

  const bringAllData = () => {
    // buscar dados no db
  }

  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
