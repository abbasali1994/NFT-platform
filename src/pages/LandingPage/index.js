import * as React from "react";
import Content from "../../components/Content";
import Discord from "../../components/Discord";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <img src="images/header.jpg" width={"100%"} alt="header" />
      <Content />
      <Discord />
      <Footer />
    </>
  );
}
