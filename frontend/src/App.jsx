import './App.css'
import { createContext, useEffect, useState } from 'react'
import {Routes, Route} from 'react-router'
import { DataPage } from './pages/DataPage'
import { TestPage } from './pages/TestPage'

export const DataContext = createContext()

function App() {
const [data, setData] = useState([])

  useEffect(() => {
        fetch("http://localhost:5001/terrorists?limit=50", {
          method: "GET"
        })
            .then(response => response.json())
            .then(response => setData(response))
        }, []);

  return (
    <div>
    <DataContext.Provider value={data}>
      <Routes>
        <Route path='/' element={<DataPage />}/>
        <Route path='/test' element={<TestPage />}/>
      </Routes>
    </DataContext.Provider>

     
    </div>
  )
}

export default App
