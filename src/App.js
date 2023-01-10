import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home-page')
  }, [])

  return (
    <div className="App">
      <Header />
      <Cart />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
