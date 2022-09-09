import { useRoutes } from "react-router-dom";
import RouterObject from "./routerObject";

const AppRouter = () => {
  return useRoutes(RouterObject());
};

export default AppRouter;
