import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./assets/components/Home.jsx";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
