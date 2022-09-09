import { BrowserRouter } from "react-router-dom";

import AppRouter from "./routes/appRouter";

import "./styles/app.css";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
