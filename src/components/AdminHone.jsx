import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import Loader from "../Util/Loader";
import { Link } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AdminHome = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Users and Products Data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });

    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  // Chart Data
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Users Growth',
        data: [30, 40, 45, 50, 60, 70, 80],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
      {
        label: 'Products Growth',
        data: [20, 30, 35, 40, 50, 65, 75],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: true,
      },
    ],
  };

  if (loading) return <Loader/>;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Total Users Card */}
        <Link to='/admin/users' className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Total Users</h2>
            <p className="text-xl">{users?.length}</p>
          </div>
          <div className="bg-blue-700 p-4 rounded-full">
            <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        {/* Total Products Card */}
        <Link to='/admin/products' className="bg-green-500 text-white p-6 rounded-lg shadow-lg flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Total Products</h2>
            <p className="text-xl">{products?.length}</p>
          </div>
          <div className="bg-green-700 p-4 rounded-full">
            <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">User & Product Growth</h2>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default AdminHome;
