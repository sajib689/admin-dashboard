import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Util/Loader";
import Swal from "sweetalert2";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [capacityFilter, setCapacityFilter] = useState("");

  useEffect(() => {
    fetch("https://api.restful-api.dev/objects")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    let filtered = products;

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (colorFilter) {
      filtered = filtered.filter(
        (product) =>
          product?.data?.color
            ?.toLowerCase()
            .includes(colorFilter.toLowerCase()) || false
      );
    }

    if (capacityFilter) {
      filtered = filtered.filter(
        (product) =>
          product?.data?.capacity?.toString().includes(capacityFilter) || false
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, colorFilter, capacityFilter, products]);
  const handleDeleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://api.restful-api.dev/objects/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            setProducts((prevProducts) =>
              prevProducts.filter((product) => product.id !== id)
            );
          })
          .catch((error) => console.error("Error deleting product:", error));
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-700 text-start">
        Total Product: {filteredProducts.length}
      </h2>

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
          {/* Color Filter */}
          <div className="flex flex-col w-1/3">
            <label className="mb-2 text-lg font-medium text-gray-700">
              Filter by Color
            </label>
            <select
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={colorFilter}
              onChange={(e) => setColorFilter(e.target.value)}
            >
              <option value="">Select Color</option>
              <option value="Red">Red</option>
              <option value="Brown">Brown</option>
              <option value="Purple">Purple</option>
              <option value="Cloudy White">Cloudy White</option>
            </select>
          </div>
        </div>

        {/* Capacity Filter */}
        <div className="flex flex-col w-1/3">
          <label className="mb-2 text-lg font-medium text-gray-700">
            Filter by Capacity
          </label>
          <select
            className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={capacityFilter}
            onChange={(e) => setCapacityFilter(e.target.value)}
          >
            <option value="">Select Capacity</option>
            <option value="64 GB">64 GB</option>
            <option value="254 GB">254 GB</option>
            <option value="256 GB">256 GB</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left font-medium">Name</th>
              <th className="px-6 py-3 text-left font-medium">Color</th>
              <th className="px-6 py-3 text-left font-medium">Capacity</th>
              <th className="px-6 py-3 text-left font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts?.map((product) => (
              <tr key={product?.id} className="border-t hover:bg-gray-100">
                <td className="px-6 py-4">{product?.name}</td>
                <td className="px-6 py-4">
                  {product?.data?.color || "No Color Available"}
                </td>
                <td className="px-6 py-4">
                  {product?.data?.capacity || "Not Available"}
                </td>
                <td className="px-6 py-4">
                  <Link
                    to={`/products/${product?.id}`}
                    className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-3 py-2 md:px-4 md:py-2 rounded text-sm md:text-base w-full md:w-auto text-center block md:inline-block"
                  >
                    View Details
                  </Link>
                  <Link
                    onClick={() => handleDeleteProduct(product?.id)}
                    className="ms-2 bg-gradient-to-r from-red-500 to-red-700 text-white px-3 py-2 md:px-4 md:py-2 rounded text-sm md:text-base w-full md:w-auto text-center block md:inline-block hover:from-red-600 hover:to-red-800"
                  >
                    Delete
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

export default Products;
