import React from 'react';
import { HomePage } from './pages/home'
import './assets/css/style.less';
import { NavBar } from './components/navbar/NavBar';


const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <HomePage />
    </>
  );
}

export default App;
