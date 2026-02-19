import './App.css'
import {Routes, Route} from 'react-router'
import { DataPage } from './pages/DataPage'
import { TestPage } from './pages/TestPage'

function App() {

  return (
    <div>
    <Routes>
      <Route path='/' element={<DataPage/>}/>
      <Route path='/test' element={<TestPage/>}/>

    </Routes>

     
    </div>
  )
}

export default App
