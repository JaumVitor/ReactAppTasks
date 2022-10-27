import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from '../Components/App/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DetailsTask } from '../Components/DetailsTask/DetailsTask'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<App />}>
        </Route>
        <Route
          path='/details'
          element={<DetailsTask/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
