import './App.css';
import './index.css';
import './component/index'
import React from "react";
import {AboutUs, ContactUs, Home, MonsterList, MonsterPage, NavBar} from './component/index'
import {BrowserRouter, Route, Routes, Link, Outlet} from "react-router-dom";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar/>}>
            <Route path='home' element={<Home/>}/>
            <Route path='monsters' element={<MonsterList/>}/>
            <Route path="monsters/:monsterID" element={<MonsterPage/>}/>
            <Route path="contactUs" element={<ContactUs/>}/>
            <Route path="aboutUs" element={<AboutUs/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;