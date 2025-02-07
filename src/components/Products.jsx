import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.restful-api.dev/objects")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDeleteProduct = (id) => {
    fetch(`https://api.restful-api.dev/objects/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      })
      .catch((error) => console.error("Error deleting product:", error));
  }
  if (loading) return <h1 className="text-center text-xl">Loading...</h1>;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-left mb-6">
        Total Products: {products?.length}
      </h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left font-medium">Name</th>
              <th className="px-6 py-3 text-left font-medium">Color</th>
              <th className="px-6 py-3 text-left font-medium">capacity</th>
              <th className="px-6 py-3 text-left font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
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
                  <Link onClick={() => handleDeleteProduct(product?.id)} className=" ms-2 bg-gradient-to-r from-red-500 to-red-700 text-white px-3 py-2 md:px-4 md:py-2 rounded text-sm md:text-base w-full md:w-auto text-center block md:inline-block hover:from-red-600 hover:to-red-800">
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
