import Navbar from "./navbar"
import Data from "./Pages/Data"
import Srilekha from "./Pages/Srilekha"
import Contact from "./Pages/Contact"
import { Route, Routes } from "react-router-dom"
import "./Style.css"


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Srilekha />} />
          <Route path="/Data" element={<Data />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App