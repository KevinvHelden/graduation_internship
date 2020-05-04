import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Navigation.module.css";
import classnames from "classnames";
import { Text } from "../../primitives";
import { Button } from "../../elements";

class Navigation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * The data used in the navigation
     */
    data: PropTypes.object.isRequired,
  };

  static defaultProps = {
    data: null,
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
    const { data } = this.props;

    return (
      <div className={classnames(styles.root)}>
        <div className={classnames(styles.user)}>
          <div className={classnames(styles.profilePicture)}>
            <img src={data.user.profilePicture} alt={"profile"} />
          </div>
          <Text text={data.user.name} variant={"h4"} light />
        </div>
        <div className={classnames(styles.pageLinks)}>
          {handleContent(data.pages)}
        </div>
        <Button text={"Log out"} variant={"destructive"} iconBefore={"exit"} />
      </div>
    );
  }
}

export default Navigation;
