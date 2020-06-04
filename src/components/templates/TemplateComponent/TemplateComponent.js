import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./TemplateComponent.module.css";
import classnames from "classnames";

class TemplateComponent extends PureComponent {
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
    propType: null
  };

  render() {
    const { propType } = this.props;

    return (
      <Fragment className={classnames(styles.root)}/>
    );
  }
}

export default TemplateComponent;
