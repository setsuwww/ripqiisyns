import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      {/* tambahkan route lain di sini */}
    </Routes>
  )
}

export default App

