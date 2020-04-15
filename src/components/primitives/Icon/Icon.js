import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Icon.module.css";
import classnames from "classnames";

//Icon imports
import Icons from "./fixtures/Icons";

class Icon extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * The image in the icon
     */
    icon: PropTypes.oneOf(["search", "edit", "delete", "trash"]).isRequired,
    /**
     * Wether the icon should be visible or not
     */
    visible: PropTypes.bool,
  };

  static defaultProps = {
    visible: true,
  };

  render() {
    const { icon, visible } = this.props;

    return (
      <div className={classnames(styles.root, { [styles.invisible]: !visible })}>
        <img
          src={
            (icon === "search" && Icons.search.src) ||
            (icon === "delete" && Icons.delete.src)
          }
          alt={Icons.search.alt}
        />
      </div>
    );
  }
}

export default Icon;
