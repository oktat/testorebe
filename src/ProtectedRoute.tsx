import { Navigate, Outlet } from "react-router-dom"


export const ProtectedRoute: React.FC<{isAuthenticated: boolean}> = ({ isAuthenticated }) => {
  if(!isAuthenticated) {
    return (
      <Navigate to="/" replace />
    )
    
  }
  return <Outlet />
}
