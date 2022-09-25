import React, { Fragment } from "react";
import MainNavigationBar from "./components/navigation";
import AppRoutes from "./pages/routes";

const App = () => {
  return (
    <Fragment>
      <MainNavigationBar />
      <AppRoutes />;
    </Fragment>
  );
};

export default App;
