
import { Outlet } from 'react-router-dom';
import Login from './Authentication/Login';

const App = () => {
  return (
    <div>
      <Login/>
      <Outlet/>
    </div>
  );
};

export default App;