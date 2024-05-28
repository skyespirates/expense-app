import { createBrowserRouter } from "react-router-dom";
import Layout from "@components/Layout";

//pages
import App from "@pages/App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "register",
        element: <div>Register</div>,
      },
      {
        path: "login",
        element: <div>Login</div>,
      },
      {
        path: "profile",
        element: <div>Profile</div>,
      },
    ],
  },
]);

export default router;
