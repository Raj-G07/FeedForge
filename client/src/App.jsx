import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginWithGoogle from './pages/Login'
import Success from './pages/Success'
import Dashboard from './pages/Dashboard'
import Feedback from './pages/Feedback'
import ThankYou from './pages/Thankyou'

const App = () => {
  return (
    <>
        <Routes>
        <Route path='/dashboard' Component={Dashboard} />
        <Route path='/' Component={LoginWithGoogle} />
        <Route path='/feedback' Component={Feedback}/>
        <Route path='/success' Component={Success} />
        <Route path='/thankyou' Component={ThankYou}/>
        </Routes>
    </>
  )
}

export default App
