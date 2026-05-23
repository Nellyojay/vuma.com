import { createHashRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { Features } from "./pages/Features";
import { Download } from "./pages/Download";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import ResetPassword from "./pages/PasswordReset/reset-password";
import WelcomeScreen from "./pages/welcomeScreen";

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "features", Component: Features },
      { path: "download", Component: Download },
      { path: "about", Component: About },
      { path: "reset-password", Component: ResetPassword },
      { path: "welcome-screen", Component: WelcomeScreen },
      { path: "*", Component: NotFound },
    ],
  },
]);
