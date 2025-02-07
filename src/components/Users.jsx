import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Util/Loader";
import { Eye } from "lucide-react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [name, setName] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = users;

    // Filter by search query (city)
    if (searchQuery) {
      filtered = filtered.filter((user) =>
        user.address.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by name
    if (name) {
      filtered = filtered.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    // Update the filtered users state
    setFilteredUsers(filtered);
  }, [searchQuery, name, users]);

  // Loader
  if (loading) return <Loader />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-left mb-6">
        Total Users: {filteredUsers?.length}
      </h1>
      <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row lg:flex-row justify-between items-center">
        {/* Search Bar */}
        <div className="flex justify-center space-x-4 w-full max-w-xs mx-auto">
          <div className="flex flex-col">
            <label className="mr-3 text-lg font-medium text-gray-700">
              Search
            </label>
            <input
              type="text"
              className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search by product name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-center space-x-4 w-full max-w-3xl mx-auto">
          {/* Name Filter */}
          <div className="flex flex-col w-1/3">
            <label className="mb-2 text-lg font-medium text-gray-700">
              Filter by Name
            </label>
            <select
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              <option value="">Select Name</option>
              {
                users.map((user) => (
                  <option key={user?.id} value={user.name}>
                    {user?.name}
                  </option>
                ))
              }
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left font-medium">Name</th>
              <th className="px-6 py-3 text-left font-medium">Email</th>
              <th className="px-6 py-3 text-left font-medium">City</th>
              <th className="px-6 py-3 text-left font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers?.map((user) => (
              <tr key={user?.id} className="border-t hover:bg-gray-100">
                <td className="px-6 py-4">{user?.name}</td>
                <td className="px-6 py-4">{user?.email}</td>
                <td className="px-6 py-4">{user?.address?.city}</td>
                <td className="px-6 py-4">
                  <Link
                    to={`/users/${user?.id}`}
                    className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-3 py-2 md:px-4 md:py-2 rounded text-sm md:text-base w-full md:w-auto text-center block md:inline-block"
                  >
                    <Eye/>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
