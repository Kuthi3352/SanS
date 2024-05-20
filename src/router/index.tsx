import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { AuthLayout } from "components";
import BodyTemplate from "components/templates/BodyTemplate";
export const router: RouteObject[] = [
  {
    path: "/",
    element: <BodyTemplate />,
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: PATH.login,
      },
    ],
  },
];
