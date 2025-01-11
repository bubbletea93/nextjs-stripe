// /components/NavPills/NavPills.js

import React from "react";
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// Material-UI components
import makeStyles from "@mui/styles/makeStyles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";

// Styles
import styles from "/styles/jss/nextjs-material-kit-pro/components/navPillsStyle.js";

const useStyles = makeStyles(styles);

export default function NavPills(props) {
  const {
    active: activeProp,
    onChange,
    tabs,
    color,
    horizontal,
    alignCenter,
  } = props;
  const [active, setActive] = React.useState(activeProp || 0);

  React.useEffect(() => {
    if (activeProp !== undefined) {
      setActive(activeProp);
    }
  }, [activeProp]);

  const handleChange = (event, newActive) => {
    if (onChange) {
      onChange(newActive);
    } else {
      setActive(newActive);
    }
  };

  const classes = useStyles();
  const flexContainerClasses = classNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined,
  });

  const tabButtons = (
    <Tabs
      classes={{
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone,
      }}
      value={active}
      onChange={handleChange}
      centered={alignCenter}
    >
      {tabs.map((prop, key) => {
        let icon = {};
        if (prop.tabIcon !== undefined) {
          icon["icon"] = <prop.tabIcon className={classes.tabIcon} />;
        }
        const pillsClasses = classNames({
          [classes.pills]: true,
          [classes.horizontalPills]: horizontal !== undefined,
          [classes.pillsWithIcons]: prop.tabIcon !== undefined,
        });
        return (
          <Tab
            label={prop.tabButton}
            key={key}
            {...icon}
            classes={{
              root: pillsClasses,
              label: classes.label,
              selected: classes[color],
            }}
          />
        );
      })}
    </Tabs>
  );

  return horizontal !== undefined ? (
    <GridContainer>
      <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
      <GridItem {...horizontal.contentGrid}>
        {tabs[active] && tabs[active].tabContent}
      </GridItem>
    </GridContainer>
  ) : (
    <div>{tabButtons}</div>
  );
}

NavPills.defaultProps = {
  active: 0,
  color: "primary",
};

NavPills.propTypes = {
  // index of the default active pill
  active: PropTypes.number,
  onChange: PropTypes.func,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.element,
      tabContent: PropTypes.node,
    })
  ).isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
  ]),
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object,
  }),
  alignCenter: PropTypes.bool,
};
