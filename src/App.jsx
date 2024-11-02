import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import './styles.css';
import RegisterPage from './pages/RegisterPage';
import CreatePage from './pages/CreateActivityPage';

function App() {

  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
        <Route path='post' element={<CreatePage />} />
      </Routes>
    </Router>
  );
}

export default App;