import { Link } from "react-router-dom";

export default function Register() {
  window.document.title = "Register | Blog App";

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[--color-lightGreen]">
      <h1 className="mb-5 text-xl text-teal-900">Login</h1>
      <form className="flex w-96 flex-col gap-5 bg-white p-12">
        <input
          className="border-b border-solid border-b-gray-500 p-5"
          required
          type="text"
          placeholder="username"
        />
        <input
          className="border-b border-solid border-b-gray-500 p-5"
          required
          type="email"
          placeholder="email"
        />
        <input
          className="border-b border-solid border-b-gray-500 p-5"
          required
          type="password"
          placeholder="password"
        />
        <button className="cursor-pointer border-none bg-teal-900 p-3 text-white">
          Register
        </button>
        <p className="text-sm text-red-500">error</p>
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
