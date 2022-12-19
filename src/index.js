import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cadastro from './Cadastro';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  }
]);

ReactDOM.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

