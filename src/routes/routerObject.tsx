import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import guard from "./pageRenderer";

const RouterObject = (): RouteObject[] => [
  {
    path: "/",
    element: guard("/", true),
    children: [
      {
        index: true,
        element: guard("/home", true),
      },
    ],
  },
  { path: "*", element: <Navigate to="/" /> },
];

export default RouterObject;
