import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import CorPrimaria from './pages/CorPrimaria'
import Caracteres from './pages/Caracteres'
import Ingresso from './pages/Ingresso'
import MaiorNumero from './pages/MaiorNumero'

export default function SiteRoutes() {
    return(
        <BrowserRouter>

        <Routes>
            <Route path='/' element ={<Home/>} />

            <Route path='/CorPrimaria' element={<CorPrimaria/>} />

            <Route path='/Caracteres' element={<Caracteres/>} />

            <Route path='/Ingresso' element={<Ingresso/>} />

            <Route path='/MaiorNumero' element={<MaiorNumero/>} />




        </Routes>

            
        
        </BrowserRouter>
    )
}