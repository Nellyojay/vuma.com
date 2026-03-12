import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Features } from "./pages/Features";
import { Download } from "./pages/Download";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "features", Component: Features },
      { path: "download", Component: Download },
      { path: "about", Component: About },
      { path: "notfound", Component: NotFound },
    ],
  },
]);
