import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import NavBar from './components/HomePage/NavBar';
import Footer from './components/HomePage/Footer';


function App() {
  return (
    <>
      <Router basename="/">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
