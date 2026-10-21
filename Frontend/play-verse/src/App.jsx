import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
import Loader from './Loader/Loader'
const LandingPage=lazy(()=>import("./Pages/LandingPage"));

function App() {
  return (
    <>
   <Suspense fallback={<Loader/>}>
     <Routes>
   <Route path='/' element={<LandingPage/>}/>
     </Routes>
      </Suspense>
    </>
  )
}

export default App
