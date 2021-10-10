/* eslint-disable react/display-name */
import LandingPage from "./pages/LandingPage";
import Mint from "./pages/Mint";

const routes = {
  "/": () => <LandingPage />,
  "/mint": () => <Mint />,
};

export default routes;
