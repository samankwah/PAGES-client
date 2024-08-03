import { useState } from "react";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import RootLayout from "./components/layouts/RootLayout";
import FAQs from "./pages/faqs";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/faqs", element: <FAQs /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
