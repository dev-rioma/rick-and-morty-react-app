import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import CardDetail from './components/CardDetail/CardDetail'




function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/:id' element={<CardDetail/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App