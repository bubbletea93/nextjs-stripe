// /pages-sections/pricing-page/SectionPricing.js

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import NavPills from "/components/NavPills/NavPills.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import Button from "/components/CustomButtons/Button.js";
import makeStyles from "@mui/styles/makeStyles";

import pricingStyle from "/styles/jss/nextjs-material-kit-pro/pages/pricingSections/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export default function SectionPricing() {
  const classes = useStyles();
  const [activeTab, setActiveTab] = React.useState(0); // 0: One-Time, 1: Monthly

  const handleTabChange = (newActive) => {
    setActiveTab(newActive);
  };

  // Define pricing tiers for One-Time and Monthly
  const pricingTiers = {
    oneTime: [
      {
        category: "Espresso",
        price: "$5",
        duration: "one-time",
        features: [
          "1 Cup of Coffee ☕",
          "Personal Thank You Email 📧",
          "Exclusive Coffee Updates 📰",
        ],
        buttonText: "Donate Now",
        buttonColor: "primary",
      },
      {
        category: "Latte",
        price: "$20",
        duration: "one-time",
        features: [
          "4 Cups of Coffee ☕☕☕☕",
          "Personalized Thank You Note 📝",
          "Exclusive Coffee Content 🎨",
          "Community Coffee Chats ☕💬",
        ],
        buttonText: "Support with Latte",
        buttonColor: "primary",
      },
      {
        category: "Cappuccino",
        price: "$50",
        duration: "one-time",
        features: [
          "12 Cups of Coffee ☕☕☕☕☕☕☕☕☕☕☕☕",
          "Personal Thank You Call 📞",
          "Exclusive Merchandise 🎁",
          "VIP Coffee Event Invitations 🎟️",
        ],
        buttonText: "Join the Cappuccino Club",
        buttonColor: "primary",
      },
    ],
    monthly: [
      {
        category: "Espresso",
        price: "$5",
        duration: "month",
        features: [
          "1 Cup of Coffee per Month ☕",
          "Monthly Thank You Email 📧",
          "Exclusive Coffee Updates 📰",
        ],
        buttonText: "Donate Monthly",
        buttonColor: "primary",
      },
      {
        category: "Latte",
        price: "$20",
        duration: "month",
        features: [
          "4 Cups of Coffee per Month ☕☕☕☕",
          "Monthly Thank You Notes 📬",
          "Early Access to New Content 🎉",
          "Community Coffee Chats ☕💬",
        ],
        buttonText: "Become a Latte Lover",
        buttonColor: "primary",
      },
      {
        category: "Cappuccino",
        price: "$50",
        duration: "month",
        features: [
          "12 Cups of Coffee per Month ☕☕☕☕☕☕☕☕☕☕☕☕",
          "Personal Thank You Calls 📞",
          "Exclusive Merchandise 🎁",
          "VIP Coffee Event Invitations 🎟️",
        ],
        buttonText: "Join the Cappuccino Club",
        buttonColor: "primary",
      },
    ],
  };

  // Select the appropriate pricing tiers based on active tab
  const currentPricingTiers =
    activeTab === 0 ? pricingTiers.oneTime : pricingTiers.monthly;

  // Handler for donation buttons
  const handleDonate = (tier) => {
    // Implement your donation logic here
    // For example, open a donation modal or redirect to a payment page
    console.log(`Donating with tier: ${tier.category} - ${tier.price}`);
    // Example: window.location.href = "/donate"; // Redirect to donate page
  };

  return (
    <div className={classes.pricingSection}>
      <GridContainer>
        <GridItem
          md={6}
          sm={6}
          className={classNames(
            classes.mrAuto,
            classes.mlAuto,
            classes.textCenter
          )}
        >
          <NavPills
            alignCenter
            color="primary"
            active={activeTab}
            onChange={handleTabChange}
            tabs={[
              {
                tabButton: "One-Time",
                // Removed tabContent to prevent content duplication
              },
              {
                tabButton: "Monthly",
                // Removed tabContent to prevent content duplication
              },
            ]}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        {currentPricingTiers.map((tier, index) => (
          <GridItem md={4} sm={4} key={index}>
            <Card pricing>
              <CardBody pricing>
                <h6
                  className={classNames(classes.cardCategory, classes.textInfo)}
                >
                  {tier.category}
                </h6>
                <h1 className={classes.cardTitle}>
                  {tier.price} <small>/{tier.duration}</small>
                </h1>
                <ul>
                  {tier.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleDonate(tier)}
                  color={tier.buttonColor}
                  round
                >
                  {tier.buttonText}
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
}
