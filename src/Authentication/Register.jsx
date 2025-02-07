import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const {register} = useContext(AuthContext)
    const handleRegistered = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        register(email, password)
        .then(res => {
            if(res){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        .catch(err => {
            console.error(err);
        })
    }

  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        {/* Right Section - Login Form */}
        <div className="w-full lg:w-1/3 bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
          <form onSubmit={handleRegistered} className="space-y-4">
             {/* Name Input */}
             <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200 outline-none"
                placeholder="Enter your name"
              />
            </div>
            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
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
            <Link className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-3 py-2 md:px-4 md:py-2 rounded text-sm md:text-base w-full text-center block mt-5">
              Register
            </Link>

            {/* Forgot Password & Register Links */}
            <div className="text-center mt-4 text-sm text-gray-500">
              <a href="#" className="hover:underline">
                Already have an account?
              </a>{" "}
              |{" "}
              <Link to="/login" className="hover:underline text-blue-500">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
