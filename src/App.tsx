import { useState } from 'react';
import './App.css';
import './output.css';
import Nav from './components/Nav';
import Cargar from './pages/Cargar';
import Libretas from './pages/Libretas';
import Libro from './pages/Libro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from './pages/Productos';


function App() {
  

  return (
    <>
      <BrowserRouter>
        <div className='h-full flex flex-col'>
          <Nav />
          <div className='flex-1'>
            <Routes>
              <Route path='/' element={<Productos/>}/>
              <Route path='*' element={<>NO SE ENCONTRO</>}/>
              <Route path='/productos' element={<Productos/>}/>
              <Route path='/cargar' element={<Cargar/>}/>
              <Route path='/libretas' element={<Libretas/>}/>
              <Route path='/librodiario' element={<Libro/>}/>
            </Routes>

          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
