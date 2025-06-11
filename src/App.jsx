import { Routes, Route } from 'react-router-dom'
import AdminDashboard from './pages/admin/AdminDashboard'

import AdminLayout from './pages/admin/AdminLayout'
import UserLayout from './Layout'

const App = () => {
  return (
    <Routes>

      {/* Layout User */}
      <Route path="/" element={<UserLayout />} />

      {/* Layout Admin */}
      <Route path="/dashboard" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
      </Route>

    </Routes>
  )
}

export default App
