import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import  Shop  from './components/Shop'
import AdminPortal from './components/Admin_Portal'
import { Navbar } from './components/Navbar'
import CoffeeProvider from './context/CoffeeContext'
import ProtectedRoute from './components/ProtectedRoute'


function App() {
    return(
        <CoffeeProvider>
            <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/shop' 
                            element={
                                <ProtectedRoute>
                                    <Shop/>
                                </ProtectedRoute>
                            }
                        />
                        <Route path='/admin_portal' 
                            element={
                                <ProtectedRoute>
                                    <AdminPortal/>
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
            </BrowserRouter>
        </CoffeeProvider>
    )
}

export default App