import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./PopupPage.module.css";
import classnames from "classnames";
import { Text } from "../../primitives";

import { AddArticle, EditArticle } from "./Templates";

class PopupPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * The title of the popup page
     */
    title: PropTypes.string.isRequired,
    /**
     * The active state of the popup page
     */
    popupActive: PropTypes.bool.isRequired,
    /**
     * The type of content in the popuppage
     */
    template: PropTypes.oneOf(["article"]).isRequired,
    /**
     * Wether the popuppage should open an add or edit page
     */
    purpose: PropTypes.oneOf(["add", "edit"]).isRequired,
    /**
     * The haze dismisses the popup page with this function
     */
    dismissPopupPage: PropTypes.func.isRequired,
  };

  static defaultProps = {
    popupActive: false,
  };

  capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  formatTitle = (arrayWithWords) => {
    const { capitalizeFirstLetter } = this;
    let returnTitle = "";
    arrayWithWords.map(
      (word) => (returnTitle = returnTitle.concat(word + " "))
    );
    returnTitle = capitalizeFirstLetter(returnTitle);
    return returnTitle;
  };

  render() {
    const { formatTitle } = this;
    const { active, dismissPopupPage, template, purpose } = this.props;
    const title = formatTitle([purpose, template]);

    return (
      <Fragment>
        <div className={classnames(styles.haze, { [styles.active]: active })} />
        <div className={classnames(styles.root, { [styles.active]: active })}>
          <div className={classnames(styles.pageHeader)}>
            <Text text={title} variant={"h2"} />
            <hr />
          </div>
          {template === "article" && purpose === "add" && (
            <AddArticle dismissPopupPage={dismissPopupPage} />
          )}
          {template === "article" && purpose === "edit" && (
            <EditArticle dismissPopupPage={dismissPopupPage} />
          )}
        </div>
      </Fragment>
    );
  }
}

export default PopupPage;
