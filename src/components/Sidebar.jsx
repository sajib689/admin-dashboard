import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-600 to-teal-500">
      {/* Sidebar */}
      <aside
        className={`w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col p-4 absolute md:relative md:flex transition-transform duration-300  ${
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
          <button
            onClick={() => setActiveTab("home")}
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              activeTab === "home"
                ? "bg-gradient-to-r from-teal-500 to-blue-600"
                : "hover:bg-teal-700"
            }`}
          >
            🏠 Home
          </button>
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              activeTab === "profile"
                ? "bg-gradient-to-r from-teal-500 to-blue-600"
                : "hover:bg-teal-700"
            }`}
          >
            👤 Users
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              activeTab === "products"
                ? "bg-gradient-to-r from-teal-500 to-blue-600"
                : "hover:bg-teal-700"
            }`}
          >
            🛒 Products
          </button>
         
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
      <main className="flex-1 p-6">
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
          <h2 className="text-2xl font-semibold">Content Goes Here</h2>
          <p className="text-gray-700 mt-4">
            This is where your content will be displayed depending on the active tab.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
