import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import SpeedbarPage from './pages/speed-bar.page'
import { RoutesLinks } from './configs/routes-links'

export default function App() {
   return (
      <div>
         <RoutesProvider />
      </div>
   )
}

function RoutesProvider() {
   return (
      <BrowserRouter>
         <PageRoutes />
      </BrowserRouter>
   )
}
function PageRoutes() {
   const navigate = useNavigate()
   const path = useLocation()

   useEffect(() => {
      if (path.pathname == '' || path.pathname == '/') {
         navigate(RoutesLinks['speed-bar'], { replace: true })
      }
   }, [])

   return (
      <Routes>
         <Route path=''>
            <Route path={RoutesLinks['speed-bar']} element={<SpeedbarPage />}></Route>
         </Route>
      </Routes>
   )
}
