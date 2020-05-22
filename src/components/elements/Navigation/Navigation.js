import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Navigation.module.css";
import classnames from "classnames";
import { Text } from "../../primitives";
import { Button } from "../../elements";
import { Link } from "react-router-dom";

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
      <div key={id} className={classnames(styles.pageLink)}>
        <Link to={"/" + page.toLowerCase().replace(/\s/g, "")}>
          <Text key={id} text={page} variant={"h5"} strong />
        </Link>
      </div>
    ));
    //Returns formatted pages in the navigation
    return pages;
  };

  render() {
    const { handleContent } = this;
    const { data } = this.props;

    return (
      <div className={classnames(styles.root)}>
        <div className={classnames(styles.brandLogo)}>
          <img src={data.brand.logo} alt={"profile"} />
        </div>
        <div className={classnames(styles.pageLinks)}>
          {handleContent(data.pages)}
          <Button text={"Log out"} variant={"destructive"} iconBefore={"exit"} />
        </div>
      </div>
    );
  }
}

export default Navigation;
