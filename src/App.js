// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import { ModalProvider } from './components/ModalProvider';
import PageContent from './components/PageContent';
import {ToastMessageBoxProvider} from './components/ToastMessageBoxProvider';

function App() {

  return (
    <ToastMessageBoxProvider>
      <ModalProvider>
        <div className="App">
          <Sidebar/>
          <Header />
          <PageContent />
          <Footer />
        </div>
      </ModalProvider>
    </ToastMessageBoxProvider>
  );
}

export default App;
