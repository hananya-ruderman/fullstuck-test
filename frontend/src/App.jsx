import './App.css'
import {Routes, Route} from 'react-router'
import { DataPage } from './pages/DataPage'

function App() {

  return (
    <div>
    <Routes>
      <Route path='/' element={<DataPage/>}/>

    </Routes>

     
    </div>
  )
}

export default App
