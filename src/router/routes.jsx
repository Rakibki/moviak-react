import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import ShowDetails from "../pages/showDetails/ShowDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/show/:showId",
        element: <ShowDetails />,
      },
    ],
  },
]);

export default router;
