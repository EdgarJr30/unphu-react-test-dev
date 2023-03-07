import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import ProtectedRoutes from './components/ProtectedRoutes';
import AddUser from './pages/AddUser';
import AdminLayout from './pages/AdminLayout';
import DashboardPage from './pages/DashboardPage';
import Login from './pages/Login'
import UsersList from './pages/UsersList';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
  
        <Route element={<ProtectedRoutes />}>
          <Route element={<AdminLayout />} >
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/users-list" element={<UsersList />} />
          </Route>
        </Route>
  
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App



