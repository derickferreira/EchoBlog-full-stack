import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

// context
import { ThemeContextProvider } from "./shared/contexts/";
import { DrawerContextProvider } from "./shared/contexts/";

// react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

interface IRoutes {
  path: string;
  element: JSX.Element;
  exact?: boolean;
  children?: IRoutes[];
}

const routes: IRoutes[] = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <ThemeContextProvider>
    <DrawerContextProvider>
      <RouterProvider router={router} />
    </DrawerContextProvider>
  </ThemeContextProvider>
);
