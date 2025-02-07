import { useState } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    color: "",
    capacity: "",
    price: "",
    generation: "",
    year: "",
    cpuModel: "",
    hardDiskSize: "",
    strapColor: "",
    caseSize: "",
    screenSize: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const productData = {
      name: formData.name,
      data: {
        color: formData.color,
        capacity: formData.capacity,
        price: formData.price,
        generation: formData.generation,
        year: formData.year,
        "CPU model": formData.cpuModel,
        "Hard disk size": formData.hardDiskSize,
        "Strap Colour": formData.strapColor,
        "Case Size": formData.caseSize,
        "Screen size": formData.screenSize,
        Description: formData.description,
      },
    };

    fetch("https://api.restful-api.dev/objects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => {
        if(res.status === 200) {
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your product has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              reset()
        }
      })
      .catch((err) => {
        Swal.fire({
            icon: "error",
            title: "Submission Failed",
            text: `${err.message}`,
          });
      });
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-700 text-start mb-6">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Product Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Product Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Color:</label>
            <input
              type="text"
              name="color"
              value={formData.color}
              onChange={handleChange}
              className="mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Capacity & Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Capacity:</label>
            <input
              type="text"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              className="mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Price:</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Generation & Year */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Generation:</label>
            <input
              type="text"
              name="generation"
              value={formData.generation}
              onChange={handleChange}
              className="mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Year:</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

        {/* CPU Model & Hard Disk Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="font-medium text-gray-600">CPU Model:</label>
            <input
              type="text"
              name="cpuModel"
              value={formData.cpuModel}
              onChange={handleChange}
              className="mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Hard Disk Size:</label>
            <input
              type="text"
              name="hardDiskSize"
              value={formData.hardDiskSize}
              onChange={handleChange}
              className="mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Strap Color & Case Size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Strap Color:</label>
            <input
              type="text"
              name="strapColor"
              value={formData.strapColor}
              onChange={handleChange}
              className="mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Case Size:</label>
            <input
              type="text"
              name="caseSize"
              value={formData.caseSize}
              onChange={handleChange}
              className="mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Screen Size & Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Screen Size:</label>
            <input
              type="text"
              name="screenSize"
              value={formData.screenSize}
              onChange={handleChange}
              className="mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-gray-600">Description:</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
        </div>

        <button type="submit" className="w-full bg-gradient-to-r from-green-400 to-teal-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
