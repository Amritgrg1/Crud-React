import React from 'react'
import Home from './components/Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Add from './components/Add'
import Edit from './components/Edit'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/create' element={<Add />}/>
          <Route path='/edit' element={<Edit />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App