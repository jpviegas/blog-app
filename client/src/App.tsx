import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Single from "./pages/Single";
import Write from "./pages/Write";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/post/:id",
          element: <Single />,
        },
        {
          path: "/write",
          element: <Write />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div className="flex min-h-screen min-w-fit flex-col justify-between bg-gray-300 font-thin">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
