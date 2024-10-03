import { createBrowserRouter } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import App from "./App";
import Home from "./pages/Home";
import Students from "./Service/pages/students/Students";
import StudentsAddOrEdit from "./Service/pages/students/StudentsAddOrEdit";
import Login from "./pages/login/Login";
import NotFound from "./Service/pages/NotFound";
import RequireGuest from "./components/RequireGuest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <App />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/students",
        children: [
          {
            index: true,
            element: <Students />,
          },
          {
            path: "add",
            element: <StudentsAddOrEdit />,
          },
          {
            path: ":id/edit",
            element: <StudentsAddOrEdit />,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: (
      <RequireGuest>
        <Login />
      </RequireGuest>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
