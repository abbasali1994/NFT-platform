/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */
import * as React from "react";
import Content from "../../components/Content";
import Discord from "../../components/Discord";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Content />
      <Discord />
      <Footer />
    </>
  );
}
