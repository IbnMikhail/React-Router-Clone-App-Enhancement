import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Link } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ErrorPage from "./error-page";
import Home from "./Pages/Home"
import Contact from "./Pages/Contact.jsx"
import About from './Pages/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home/:homeId",
        element: <Home />,
      },
      {
        path: "about/:aboutId",
        element: <About />,
      },
      {
        path: "contact/:contactId",
        element: <Contact />,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);