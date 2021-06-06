import * as React from "react";
import GithubCorner from 'react-github-corner';
import { Helmet } from "react-helmet";

import { Navbar } from "../components/Navbar";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { UTMBuilder } from "../components/UTMBuilder";

const IndexPage = () => {
  return (
    <React.Fragment>
      <Helmet>
          <meta charSet="utf-8" />
          <title>UTM Builder for Google Analytics</title>
          <meta content="Free URL builder to create UTM codes for all your Google Analytics campaign URLs" name="description"></meta>
          <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
        />
        </Helmet>
      <Navbar />
      <Header />
      <UTMBuilder />
      <Footer />
      <GithubCorner href="https://github.com/bhuvanbalasubramanian/utmbuilder" />
    </React.Fragment>
  );
};

export default IndexPage;
