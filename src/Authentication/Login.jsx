import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
   const {login} = useContext(AuthContext)
   const navigate = useNavigate()
      const handleLogin = e => {
          e.preventDefault();
          const form = e.target
          const email = form.email.value
          const password = form.password.value
          login(email, password)
          .then(res => {
              if(res){
                  Swal.fire({
                      position: "top-center",
                      icon: "success",
                      title: "Login Success!",
                      showConfirmButton: false,
                      timer: 1500
                    });
                    navigate('/adminhome')
              }
          })
          .catch(err => {
              console.error(err);
          })
      }
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
    

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/3 bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <button className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-3 py-2 md:px-4 md:py-2 rounded text-sm md:text-base w-full text-center block mt-5">
        Login
      </button>

          {/* Forgot Password & Register Links */}
          <div className="text-center mt-4 text-sm text-gray-500">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>{" "}
            |{" "}
            <Link to='/register' className="hover:underline text-blue-500">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
