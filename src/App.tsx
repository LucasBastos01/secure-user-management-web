import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import NotFound from './pages/NotFound/NotFound'
import { PublicRoute } from './context/PublicRoute'
import { PrivateRoute } from './context/PrivateRoute'
import UserDashboard from './pages/Dashboard/UserDashboard/UserDashboard'
import AdminDashboard from './pages/Dashboard/AdminDashboard/AdminDashboard'

function App() {
  return (
    <Routes>
      {/* públicas */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />

      {/* protegidas */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute allowedRoles={['user']}>
            <UserDashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </PrivateRoute>
        }
      />

      {/* forbidden */}
      <Route path="/forbidden" element={<NotFound />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
