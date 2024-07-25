import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./assets/components/Home.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './assets/components/crud/Create.jsx';
import Read from './assets/components/crud/Read.jsx';
import Update from './assets/components/crud/Update.jsx';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/read/:id" element={<Read />} />
            <Route path="/update/:id" element={<Update />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
