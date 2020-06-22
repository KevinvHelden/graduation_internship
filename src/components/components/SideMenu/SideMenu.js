import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./SideMenu.module.css";
import classnames from "classnames";
import { Text } from "../../primitives";
import { Button } from "../../elements";

class SideMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      active: nextProps.active,
    };
  }

  static propTypes = {
    /**
     * The SideMenu appears when this is true
     */
    active: PropTypes.bool.isRequired,
    /**
     * The SideMenu disappears when this is called
     */
    dismiss: PropTypes.func.isRequired,
  };

  static defaultProps = {
    active: false,
  };

  render() {
    const { active } = this.state;
    const { dismiss } = this.props;

    return (
      <Fragment>
        <div className={classnames(styles.haze, { [styles.active]: active })} />
        <div className={classnames(styles.root, { [styles.active]: active })}>
          <div className={classnames(styles.sideMenuNav)}>
            <Text variant={"h3"} text={"Filters"} />
            <Button
              clickFunc={dismiss}
              variant={"ghost"}
              text={"Back"}
              iconAfter={"arrowRight"}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SideMenu;
