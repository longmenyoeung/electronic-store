import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <div className='font-text'>
        <Header/>
        <main>
            <Outlet/>
        </main>
        
        </div>
    )
    }

export default App