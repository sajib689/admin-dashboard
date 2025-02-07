

const AddProduct = () => {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const data = {
        color: form.color.value,
        capacity: form.capacity.value
    }
    fetch("https://api.restful-api.dev/objects",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, data})
    })
    .then( res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Add New Product</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Product ID */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-600">Product ID:</label>
          <input
            type="text"
            name="id"
            className="mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        {/* Product Name */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-600">Product Name:</label>
          <input
            type="text"
            name="name"
            className="mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        {/* Product Color */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-600">Color:</label>
          <input
            type="text"
            name="color"
            className="mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        {/* Product Capacity */}
        <div className="flex flex-col">
          <label className="font-medium text-gray-600">Capacity:</label>
          <input
            type="text"
            name="capacity"
            className="mt-1 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-400 to-teal-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
