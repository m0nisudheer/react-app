import React from 'react';
// import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { HashRouter,Route, Routes } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Body1 from './Body1';
import Body2 from './Body2';
import Body3 from './Body3';
import Body4 from './Body4';
import Body5 from './Body5';
import Body6 from './Body6';
import Contact from './Contact'; 
import Shop from './Shop';
import Blog from './Blog';

function App() {
  return (
    // <BrowserRouter>
    <HashRouter>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <Body />
            <Body1/>
            <Body2/>
            <Body3/>
            <Body4/>
            <Body5/>
            <Body6/>     
          </>
          } />
        <Route path="/Contact" element={<Contact/>} /> 
        <Route path="/Shop" element={<Shop/>} /> 
        <Route path="/Blog" element={<Blog/>}/>
      </Routes>
      </HashRouter>
    // </BrowserRouter>

  );
}

export default App;