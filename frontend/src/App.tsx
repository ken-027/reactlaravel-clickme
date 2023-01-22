import React, { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './styles/css/mainstyles.css'
import './styles/sass/config/_index.scss'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const NotFound = lazy(() => import('./pages/error/NotFound'))

const App = (): React.ReactElement => {
  useEffect(() => {}, [])

  return (
    <Suspense fallback={<>Loading...</>}>
      <BrowserRouter>
        <Routes>
          <Route
            path='*'
            element={<NotFound />}
          />
          <Route
            path='/'
            element={<Dashboard />}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
