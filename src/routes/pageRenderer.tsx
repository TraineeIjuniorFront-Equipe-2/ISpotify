import { Navigate } from "react-router-dom";

import BasePage from "../pages/BasePage";
import HomePage from "../pages/HomePage";

function RenderPageByRule(rule: string): JSX.Element {
  switch (rule) {
    case "/":
      return <BasePage />;
    case "/home":
      return <HomePage />;
    default:
      return <>Page not found</>;
  }
}

const guard = (rule: string, canRender: boolean): JSX.Element => {
  return canRender ? RenderPageByRule(rule) : <Navigate to="/" />;
};

export default guard;
