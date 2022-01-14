import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from "../containers/Layout"
import Login from "../pages/Login";
import Home from "../pages/Home"


function App() {
  return (
    <BrowserRouter>   

      <Layout>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Login" element={<Login/>}/>
        </Routes>

        {/* <Login />
        <Notes /> */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
