import { useState } from 'react'

import {BrowserRouter, Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Students from './Students'
import CreateStudents from './CreateStudents'
import UpdateStudents from './UpdateStudents'
function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Students/>}></Route>
      <Route path='/create' element={<CreateStudents/>}></Route>
      <Route path='/update/:id' element={<UpdateStudents/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>  
  
  )
}

export default App
