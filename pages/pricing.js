/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import makeStyles from "@mui/styles/makeStyles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Footer from "/components/Footer/Footer.js";
// sections for this page
import SectionPricing from "/pages-sections/pricing-page/SectionPricing.js";
import SectionFeatures from "/pages-sections/pricing-page/SectionFeatures.js";

import pricingStyle from "/styles/jss/nextjs-material-kit-pro/pages/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export default function PricingPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  const classes = useStyles();
  return (
    <div>
      <Header
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
      />

      <Parallax image="/img/bg2.jpg" filter="dark" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>No Takesies Backsies</h1>
              <h4>
                Ready to make a choice you won't back out of? Pick the plan for
                you that works for you, and let our seamless Stripe integration
                handle the rest. Choose from one of the three awesome options
                below and let's get this party started!
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionPricing />
          <hr />
          <SectionFeatures />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.right}>
              &copy; {new Date().getFullYear()} , made with{" "}
              <Favorite className={classes.icon} /> using{" "}
              <strong>Stripe</strong> for secure payments.
            </div>
          </div>
        }
      />
    </div>
  );
}
