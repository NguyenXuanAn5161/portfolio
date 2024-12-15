import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutComponent from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";
import AboutMe from "./pages/AboutMe/AboutMe";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutComponent />,
      errorElement: <NotFound />,
      children: [
        {
          path: "",
          index: true,
          element: <AboutMe />,
        },
        {
          path: "portfolio",
          index: true,
          element: <Portfolio />,
        },
        {
          path: "resume",
          index: true,
          element: <Resume />,
        },
        {
          path: "contact",
          index: true,
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
