import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Banner from '../components/Banner'

const AppRouter = () => {
  return (
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Banner />} />
            
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter