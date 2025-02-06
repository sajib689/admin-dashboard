import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";


const App = () => {
  return (
    <div>
      <Sidebar/>
      <Outlet/>
    </div>
  );
};

export default App;