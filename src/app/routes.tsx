import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { ProjectDetail } from "./pages/ProjectDetail";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Layout } from "./components/Layout";
import { SiemensDemoPage } from "./pages/SiemensDemoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "projects", Component: Projects },
      { path: "projects/:id", Component: ProjectDetail },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
  { path: "/ui-demo/siemens", Component: SiemensDemoPage },
]);
