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

function App() {

  const location = useLocation();

  return (
    <ToastMessageBoxProvider>
      <ModalProvider>
          <div className="App">
              <Routes location={location}>
                <Route path="/" element={<MainPage />} />
                <Route path="home" element={<PageContent><HomeComponent /></PageContent>} />
                <Route path="admin" element={<PageContent><AdminComponent /></PageContent>}>
                  <Route index element={<Navigate to="dashboard" />} />
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path='requests' element={<AdminRequests />} />
                </Route>
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