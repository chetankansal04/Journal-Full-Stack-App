import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import AuthForm from "./components/AuthForm";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import UserJournals from "./components/UserJournals.JSX";
import NewJournal from "./components/NewJournal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "",
        element: <AuthForm></AuthForm>,
      },
      {
        path: "login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "journal",
        element:<UserJournals></UserJournals>
      },
      {path: "new-journal",
        element: <NewJournal></NewJournal>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
