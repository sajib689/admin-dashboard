import { useContext, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const {logOut,user} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut().then(() => {
      navigate('/auth/login');
    }).catch((error) => {
      console.error("Logout failed:", error);
    });
  }
  
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col p-4 fixed top-0 left-0 h-full z-20 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">📊</span>
            <span className="text-xl font-semibold">Dashboard</span>
          </div>
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            ✖
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          <Link
            to="/admin/adminhome"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              location.pathname === "/"
                ? "bg-gradient-to-r from-teal-500 to-blue-600"
                : "hover:bg-teal-700"
            }`}
          >
            🏠 Home
          </Link>
          <Link
            to="/admin/users"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              location.pathname === "/admin/users"
                ? "bg-gradient-to-r from-teal-500 to-blue-600"
                : "hover:bg-teal-700"
            }`}
          >
            👤 Users
          </Link>
          <Link
            to="/admin/products"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              location.pathname === "/products"
                ? "bg-gradient-to-r from-teal-500 to-blue-600"
                : "hover:bg-teal-700"
            }`}
          >
            🛒 Products
          </Link>
          <Link
            to="/admin/addproduct"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              location.pathname === "/addproduct"
                ? "bg-gradient-to-r from-teal-500 to-blue-600"
                : "hover:bg-teal-700"
            }`}
          >
            🛒 Add Product
          </Link>
          <Link
            to="/admin/earnings"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              location.pathname === "/earnings"
                ? "bg-gradient-to-r from-teal-500 to-blue-600"
                : "hover:bg-teal-700"
            }`}
          >
            💰 Earnings
          </Link>
          <Link
            to="/admin/settings"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              location.pathname === "/settings"
                ? "bg-gradient-to-r from-teal-500 to-blue-600"
                : "hover:bg-teal-700"
            }`}
          >
            ⚙️ Settings
          </Link>
          <Link
            to="/admin/messages"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              location.pathname === "/messages"
                ? "bg-gradient-to-r from-teal-500 to-blue-600"
                : "hover:bg-teal-700"
            }`}
          >
            ✉️ Messages
          </Link>
          <Link
            onClick={handleLogout}
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
            "hover:bg-teal-700"
            }`}
          >
            🚪 Logout
          </Link>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-64 lg:ml-64 p-6 overflow-y-auto">
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
          <div className="relative w-full">
            <h1 className="md:text-xl font-semibold ms-5 sm:text-[18px]">
              Welcome to the Dashboard {user?.email}
            </h1>
          </div>
        </header>

        <div className="mt-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
