import { Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './page/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' Component={Home} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
