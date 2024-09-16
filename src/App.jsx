import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/Dashboard'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ChakraBaseProvider, theme as chakraTheme } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Employees from './pages/Employees'
import ActiveEmployee from './pages/ActiveEmployee'
import Header from './components/Header'
import Employee from './pages/Employee'
function App() {
  const [theme,setTheme] = useState('light')
  
  return (
    <ChakraBaseProvider theme={chakraTheme}>
    <div className='w-screen h-screen bg-main-light-bg dark:bg-main-dark-bg text-black dark:text-white  overflow-hidden flex '>
    <BrowserRouter >
    <Navbar />
    <div className='w-4/5 relative '>
    <Header theme={theme} setTheme={setTheme} />
    <div className='w-full h-full  overflow-x-hidden overflow-scroll pt-[7.35rem] px-[2.5%]'>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employee" element={<Employees />} />
        <Route path="/employee/:id" element={<Employee />} />
        <Route path="/a" element={<ActiveEmployee />} />
      </Routes>
      </div>
      
      </div>
    </BrowserRouter>
    </div>
    </ChakraBaseProvider>
  )
}

export default App
