import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./Popup.module.css";
import classnames from "classnames";

import { DeleteArticle } from "./Templates";

class Popup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
      listItems: [],
    };
  }

  static propTypes = {
    /**
     * The bool to activate the popup
     */
    active: PropTypes.bool.isRequired,
    /**
     * The data shown in the popup
     */
    data: PropTypes.array.isRequired,
    /**
     * The template used in the popup
     */
    template: PropTypes.string.isRequired,
    /**
     * The purpose of the template
     */
    purpose: PropTypes.string.isRequired,
    /**
     * The function to dismiss the popup
     */
    dismissPopup: PropTypes.func.isRequired,
  };

  static defaultProps = {
    active: null,
  };

  static getDerivedStateFromProps(nextProps) {
    return {
      active: nextProps.active,
    };
  }

  dismissPopup = () => {
    this.props.dismissPopup();
  };

  render() {
    const { active } = this.state;
    const { dismissPopup } = this;
    const { data, template, purpose } = this.props;

    return (
      <Fragment>
        <div className={classnames(styles.haze, { [styles.active]: active })} />
        <div className={classnames(styles.root, { [styles.active]: active })}>
          {template === "article" && purpose === "delete" && active === true &&  (
            <DeleteArticle data={data} dismissPopup={dismissPopup} />
          )}
        </div>
      </Fragment>
    );
  }
}

export default Popup;
