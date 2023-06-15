import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/lawyers">Lawyers</Link>
      <Outlet />
    </div>
  );
}

export default App;
