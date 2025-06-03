import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import SideBar from './components/SideBar';
import Header from './components/Header';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className='dashboard'>
      <SideBar/>
      <Box margin={"10px"}>
        <Header/>
        <MainPage/>
      </Box>
    </div>
  );
}

export default App;
