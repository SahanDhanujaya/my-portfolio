import { createBrowserRouter } from "react-router-dom";
import Layout from "@/pages/layouts/layout";
import Home from "../pages/homeSection/Home";
import NotFound from "@/pages/404/404";
import Experience from "@/pages/experienceSection";
import About from "@/pages/aboutSection";
import Projects from "@/pages/projectSection";
import Contact from "@/pages/contactSection"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
