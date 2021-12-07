/* eslint-disable react/display-name */
import LandingPage from "./pages/LandingPage";
import Mint from "./pages/Mint";
import MyKamis from "./pages/MyKamis";
import MarketPlace from "./pages/MarketPlace";

const routes = {
  "/": () => <LandingPage />,
  "/mint": () => <Mint />,
  "/mykamis": () => <MyKamis />,
  "/markets":() => <MarketPlace/>,
};

export default routes;
