import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Navigation.module.css";
import classnames from "classnames";
import { Text } from "../../primitives";
import { Button } from "../../elements";

import mockupProfile from "../../../images/profilePicture.png";

class Navigation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * An example propType
     */
    propType: PropTypes.node,
  };

  static defaultProps = {
    propType: null,
  };

  //Dynamically maps all sections to the navigation
  handleContent = (pagesData) => {
    const pages = pagesData.map((page, id) => (
      <Text key={id} text={page} variant={"h5"} strong light />
    ));
    //Returns formatted pages in the navigation
    return pages;
  };

  render() {
    const { handleContent } = this;
    const pageInfo = {
      username: "Martijn",
      pages: ["Noise", "Articles", "Users"],
    };

    return (
      <div className={classnames(styles.root, "desktop")}>
        <div className={classnames(styles.user)}>
          <div className={classnames(styles.profilePicture)}>
            <img src={mockupProfile} alt={"profile"} />
          </div>
          <Text text={pageInfo.username} variant={"h4"} light />
        </div>
        <div className={classnames(styles.pageLinks)}>
          {handleContent(pageInfo.pages)}
        </div>
        <Button text={"Log out"} variant={"destructive"} iconBefore={"exit"} />
      </div>
    );
  }
}

export default Navigation;
