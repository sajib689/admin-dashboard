import { Link, useLoaderData } from "react-router-dom";

const ViewProduct = () => {
  const product = useLoaderData();

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{product?.name}</h2>

      <div className="border-t border-gray-300 mt-2 pt-4">
        <p className="text-gray-600">
          <span className="font-semibold">Color:</span> {product?.data?.color}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Capacity:</span>{" "}
          {product?.data?.capacity}
        </p>
      </div>

      <Link className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-3 py-2 md:px-4 md:py-2 rounded text-sm md:text-base w-full text-center block mt-5">
        Buy Now
      </Link>
    </div>
  );
};

export default ViewProduct;
