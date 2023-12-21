import {BrowserRouter, Routes, Route} from "react-router-dom"
import Posts from "./Posts"
import Add from "./Add"
import Update from "./Update"

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/update/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
