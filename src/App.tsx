import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./pages/Main";
import Introduce from "./pages/Introduce";
import License from "./pages/License";
import Business from "./pages/Business";
import Gallery from "./pages/Gallery";
import GalleryDetail from "./pages/GalleryDetail";
import Question from "./pages/Question";
import AddGallery from "./admin/AddGallery";
import Road from "./pages/Road";
import Facility from "./pages/Facility";
import Sprinkler from "./pages/Sprinkler";
import Retardant from "./pages/Retardant";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/introduce/intro",
        element: <Introduce />,
      },
      {
        path: "/introduce/license",
        element: <License />,
      },
      {
        path: "/business/certificate",
        element: <Business />,
      },
      {
        path: "/business/facility",
        element: <Facility />,
      },
      {
        path: "/business/sprinkler",
        element: <Sprinkler />,
      },
      {
        path: "/business/retardant",
        element: <Retardant />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/gallery/:id",
        element: <GalleryDetail />,
      },
      {
        path: "/gallery/post",
        element: <AddGallery />,
      },
      {
        path: "/question",
        element: <Question />,
      },
      {
        path: "/road",
        element: <Road />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <div className="w-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
