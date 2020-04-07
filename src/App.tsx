import React from 'react';
import { HomePage } from './pages/home'
import { NavBar } from './components/navbar/NavBar';
import './assets/css/style.less';


const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <HomePage />
    </>
  );
}

export default App;
