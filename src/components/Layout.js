import React from "react";
import Navbar from "./NavbarComp";
import Footer from "./FooterComp";

function Layout(props) {
  return (
    <React.Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
