import NavBar from "./Component/NavBar";
import "./styles.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import Contact from "./Component/Contact";
import Intro from "./Component/Intro";
import ErrorPage from "./Component/ErrorPage";
import Products from "./Component/Products";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Intro /> },
        { path: "/contact", element: <Contact /> },
        { path: "/products", element: <Products /> }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
