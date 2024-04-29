
import './App.css';

import IndexPage from './Pages/IndexPage/IndexPage';
import BurgerPage from './Pages/BurgerPage';
import CartContext from './store/cart-context';
import Layout from './Components/Layout/Layout';
import axios, { AxiosError, AxiosInstance } from 'axios'

import React, { Suspense, useEffect } from 'react';
import { Route, Routes, Navigate,BrowserRouter } from 'react-router-dom';




function App() {

  return (

    <Suspense>
    <Layout> 
      <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<IndexPage />} />
      <Route path="/burgers" element={<BurgerPage />} />
      </Routes>
    </Layout>
    </Suspense>

    
    // <Layout> 
    //   <IndexPage/>
    //   {/* <BurgerPage/> */}
    // </Layout>
  );
}

export default App;
