import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import './components/Form.css';
import styled from 'styled-components';


//importamos los componentes creados

import About from './components/paginas/about';
import Contact from './components/paginas/contact';
import Home from './components/paginas/home';
import Inscribirse from './components/paginas/inscribirse';
import NavBarExample from './layouts/navbar';

function App() {
  return (
    
    <main>
    <div className="conteiner" >
      
        <BrowserRouter>

        <Routes>

          <Route path='/' element={ <NavBarExample /> }>
            
            <Route index element={ <Home /> } />
            <Route path='about' element={ <About /> } />
            <Route path='contact' element={ <Contact /> } />
            <Route path='inscribirse' element={ <Inscribirse /> } />
            
            <Route path='*' element={ <Navigate replace to="/" /> }/>

          </Route>
          
        </Routes>
        
  </BrowserRouter>
  
            <b>Copyright&copy;Circulo 2022. </b>
    
    </div>
    
    </main>
    
  );

}




export default App;
