import Home from './components/Home'
import About from './components/About'
import Secretarait from './components/Secretariat'
import Committee from './components/Committee'
import Apply from './components/Application'
import ErrorPage from "./components/404"
import React, { useState } from "react";
import '../src/App.css';
// import preloader from './assets/preloader.gif'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 6000);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center w-screen bg-slate-100">

        <div>
          <BrowserRouter>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/secretarait" element={<Secretarait />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>


        </div>


      </div>
    </>

  );
}

export default App;