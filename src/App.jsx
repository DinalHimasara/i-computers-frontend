import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/Home'
import LoginPage from './Pages/Login'
import RegisterPage from './Pages/register'
import AdminPage from './Pages/admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
      <div className='w-full h-screen'>

      {/* Routing the paths */}
      
        <Routes path="/">
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
        </Routes>



      </div>



    </BrowserRouter>
     
  
   
)


}

export default App
