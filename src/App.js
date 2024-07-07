import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Registration/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
