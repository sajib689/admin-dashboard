import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

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
            to="/"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              activeTab === "home"
                ? "bg-gradient-to-r from-teal-500 to-blue-600"
                : "hover:bg-teal-700"
            }`}
          >
            🏠 Home
          </Link>
          <Link
            to="/users"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              activeTab === "profile"
                ? "bg-gradient-to-r from-teal-500 to-blue-600"
                : "hover:bg-teal-700"
            }`}
          >
            👤 Users
          </Link>
          <Link
            to="/products"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              activeTab === "products"
                ? "bg-gradient-to-r from-teal-500 to-blue-600"
                : "hover:bg-teal-700"
            }`}
          >
            🛒 Products
          </Link>
          <Link
            to="/payment-history"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              activeTab === "payment-history"
                ? "bg-gradient-to-r from-teal-500 to-blue-600"
                : "hover:bg-teal-700"
            }`}
          >
            🛒 Payment History
          </Link>
          <Link
            to="/earnings"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              activeTab === "earnings"
                ? "bg-gradient-to-r from-teal-500 to-blue-600"
                : "hover:bg-teal-700"
            }`}
          >
            🛒 Earnings
          </Link>
          <button
            onClick={() => setActiveTab("settings")}
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              activeTab === "settings"
                ? "bg-gradient-to-r from-teal-500 to-blue-600"
                : "hover:bg-teal-700"
            }`}
          >
            ⚙️ Settings
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              activeTab === "messages"
                ? "bg-gradient-to-r from-teal-500 to-blue-600"
                : "hover:bg-teal-700"
            }`}
          >
            ✉️ Messages
          </button>
          <button
            onClick={() => setActiveTab("logout")}
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              activeTab === "logout"
                ? "bg-gradient-to-r from-teal-500 to-blue-600"
                : "hover:bg-teal-700"
            }`}
          >
            🚪 Logout
          </button>
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
      <main className="flex-1 ml-64 p-6 overflow-y-auto">
        <header className="flex items-center justify-between p-4 bg-white shadow-md">
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(true)}
          >
            ☰
          </button>
          <div className="relative">
            <h1 className="text-xl font-semibold">Welcome to the Dashboard</h1>
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
