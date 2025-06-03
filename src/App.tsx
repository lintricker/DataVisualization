import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className='dashboard'>
      <SideBar/>
      <MainPage/>
    </div>
  );
}

export default App;
