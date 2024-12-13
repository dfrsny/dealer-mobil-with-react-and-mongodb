import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const location = useLocation(); // Get the current location

  return (
    <>
      {/* Conditionally render the Navbar and Footer only if the path is not '/login' */}
      {location.pathname !== '/login' && <Navbar />}
      <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
        <Outlet />
      </main>
      {location.pathname !== '/login' && <Footer />}
    </>
  );
}

export default App;
