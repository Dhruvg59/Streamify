import Home from './Pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home/>}></Route>  
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
