import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Register = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const handleGoogleSignin = () => {};
  return (
    <>
      <div className="h-[calc(100vh-120px)] flex justify-center items-center">
        <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-4">Please Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="Email Address"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                name="password"
                placeholder="Password "
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
              />
            </div>
            {message && (
              <p className="text-red-500 text-sm italice">{message}</p>
            )}
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-8 rounded focus:outline-none ">
                Register
              </button>
            </div>
          </form>
          <p className="align-baseline font-medium mt-4">
            Already have an account ? Please{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
              {" "}
              Login
            </Link>
          </p>
          {/* google signin method */}
          <div className="mt-4">
            <button
              onClick={handleGoogleSignin}
              className="w-full flex flex-wrap gap-1 justify-center items-center text-white bg-black hover:bg-blue-700 py-2 px-3"
            >
              <FaGoogle className="mr-2" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
