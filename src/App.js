// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { ModalProvider } from './components/ModalProvider';
import PageContent from './components/PageContent';
import {ToastMessageBoxProvider} from './components/ToastMessageBoxProvider';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import AdminComponent from './components/AdminComponent';
import AdminDashboard from './components/AdminDashboard';
import AdminRequests from './components/AdminRequests';
import MainPage from './components/MainPage';
import AdminEmployees from './components/AdminEmployees';
import AdminProjects from './components/AdminProjects';
import AdminTasks from './components/AdminTasks';
import AdminRoles from './components/AdminRoles';
import AdminProfiles from './components/AdminProfiles';
import ProfileComponent from './components/ProfileComponent';
import LoginPage from './components/LoginPage';

function App() {

  const location = useLocation();

  return (
    <ToastMessageBoxProvider>
      <ModalProvider>
          <div className="App">
              <Routes location={location}>
                <Route path="/" element={<MainPage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path="home" element={<PageContent><HomeComponent /></PageContent>} />
                <Route path="admin" element={<PageContent><AdminComponent /></PageContent>}>
                  <Route index element={<Navigate to="dashboard" />} />
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path='employees' element={<AdminEmployees />} />
                  <Route path='requests' element={<AdminRequests />} />
                  <Route path='projects' element={<AdminProjects />} />
                  <Route path='tasks' element={<AdminTasks />} />
                  <Route path='roles' element={<AdminRoles />} />
                  <Route path='profiles' element={<AdminProfiles />} />
                </Route>
                <Route path='profile/:id' element={<PageContent><ProfileComponent/></PageContent>} />
              </Routes>
          </div>
      </ModalProvider>
    </ToastMessageBoxProvider>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;