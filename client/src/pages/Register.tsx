import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  window.document.title = "Register | Blog App";
  const [inputs, setInputs] = useState({
    username: "user",
    email: "email",
    password: "pass",
  });
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/auth/register", inputs);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[--color-lightGreen]">
      <h1 className="mb-5 text-xl text-teal-900">Login</h1>
      <form className="flex w-96 flex-col gap-5 bg-white p-12">
        <input
          className="border-b border-solid border-b-gray-500 p-5"
          required
          type="text"
          placeholder="username"
          name="username"
          onChange={handleChange}
        />
        <input
          className="border-b border-solid border-b-gray-500 p-5"
          required
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          className="border-b border-solid border-b-gray-500 p-5"
          required
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button
          className="cursor-pointer border-none bg-teal-900 p-3 text-white"
          onClick={handleSubmit}
        >
          Register
        </button>
        {error && <p className="text-sm text-red-500">error</p>}
        <span className="text-center text-lg">
          Do you have an account?{" "}
          <Link className="text-teal-900 underline" to="/login">
            Login
          </Link>
        </span>
      </form>
    </main>
  );
}
