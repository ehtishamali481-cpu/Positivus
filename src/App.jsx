import React from 'react'
import Main from './component/Home/Main'
import About from './component/About/About'
import Services from './component/Services/Services'
import UseCase from './component/Usecase/UseCase'
import Pricing from './component/Pricing/Pricing'
import Blog from './component/Blog/Blog'
import { BrowserRouter, Routes, Route } from "react-router";





const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/useCase' element={<UseCase />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/blog' element={<Blog />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
