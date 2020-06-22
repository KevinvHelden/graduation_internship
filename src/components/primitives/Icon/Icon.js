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
    icon: PropTypes.oneOf([
      "add",
      "arrowRight",
      "clear",
      "delete",
      "edit",
      "exit",
      "filter",
      "filter_orange",
      "save",
      "search",
      "settings",
      "view",
    ]).isRequired,
    /**
     * Wether the icon should be visible or not
     */
    visible: PropTypes.bool,
  };

  static defaultProps = {
    visible: true,
  };

  render() {
    const { icon, visible, reference } = this.props;

    return (
      <div
        ref={reference && reference}
        className={classnames(styles.root, { [styles.invisible]: !visible })}
      >
        <img
          src={
            (icon === "add" && Icons.add.src) ||
            (icon === "arrowRight" && Icons.arrowRight.src) ||
            (icon === "clear" && Icons.clear.src) ||
            (icon === "delete" && Icons.delete.src) ||
            (icon === "edit" && Icons.edit.src) ||
            (icon === "exit" && Icons.exit.src) ||
            (icon === "filter" && Icons.filter.src) ||
            (icon === "filter_orange" && Icons.filter_orange.src) ||
            (icon === "save" && Icons.save.src) ||
            (icon === "search" && Icons.search.src) ||
            (icon === "settings" && Icons.settings.src) ||
            (icon === "view" && Icons.view.src)
          }
          alt={Icons.search.alt}
        />
      </div>
    );
  }
}

export default Icon;
