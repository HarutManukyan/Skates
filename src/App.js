import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home-page')
  }, [])

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
