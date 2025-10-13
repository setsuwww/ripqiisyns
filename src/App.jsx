import { Routes, Route } from 'react-router-dom'
import UserLayout from './Layout'
import Intro from './components/Intro';

const App = () => {
  return (
    <Intro>
      <Routes>
        <Route path="/" element={<UserLayout />} />
      </Routes>
    </Intro>
  )
}
export default App
