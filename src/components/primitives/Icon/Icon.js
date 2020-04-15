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
    icon: PropTypes.oneOf(["search", "edit", "delete"]).isRequired,
  };

  static defaultProps = {};

  render() {
    const { icon } = this.props;
    console.log(Icons.search.src);

    return (
      <div className={classnames(styles.root)}>
        <img
          src={icon === "search" && Icons.search.src}
          alt={Icons.search.alt}
        />
      </div>
    );
  }
}

export default Icon;
