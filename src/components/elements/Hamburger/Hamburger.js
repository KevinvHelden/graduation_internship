import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Hamburger.module.css";
import classnames from "classnames";

class Hamburger extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.hamburgerRef = React.createRef();
  }

  static propTypes = {
    /**
     * The on click animation
     */
    animation: PropTypes.oneOf([
      "3dx",
      "3dx_reverse",
      "3dy",
      "3dy_reverse",
      "3dxy",
      "3dxy_reverse",
      "arrow",
      "arrow_reverse",
      "arrowalt",
      "arrowalt_reverse",
      "arrowturn",
      "arrowturn_reverse",
      "boring",
      "collapse",
      "collapse_reverse",
      "elastic",
      "elastic_reverse",
      "emphatic",
      "emphatic_reverse",
      "minus",
      "slider",
      "slider_reverse",
      "spin",
      "spin_reverse",
      "spring",
      "spring_reverse",
      "stand",
      "stand_reverse",
      "squeeze",
      "vortex",
      "vortex_reverse",
    ]),
    /**
     * Wether the hamburger is placed left or right
     */
    placement: PropTypes.oneOf(["left", "right"]),
    /**
     * A white or black hamburger when active
     */
    activeColour: PropTypes.oneOf(["light", "dark"]),
    /**
     * A white or black hamburger when it isn't active
     */
    inactiveColour: PropTypes.oneOf(["light", "dark"]),
    /**
     * A function to execute when clicked
     */
    propsFunc: PropTypes.func,
  };

  static defaultProps = {
    animation: "boring",
    placement: "right",
    activeColour: "dark",
    inactiveColour: "dark",
  };

  componentDidMount() {
    this.hamburgerRef.current.addEventListener("click", this.handleHamburger);
  }

  componentWillUnmount() {
    this.hamburgerRef.current.removeEventListener(
      "click",
      this.handleHamburger
    );
  }

  toggleHamburger = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  handleHamburger = () => {
    this.toggleHamburger();
    this.props.propsFunc && this.props.propsFunc();
  };

  render() {
    const { hamburgerRef } = this;
    const { active } = this.state;
    const { animation, placement, activeColour, inactiveColour } = this.props;

    return (
      <button
        ref={hamburgerRef}
        className={classnames(
          styles.root,
          { [styles.active]: active },
          { [styles.left]: placement === "left" },
          { [styles.right]: placement === "right" },
          { [styles.darkActive]: activeColour === "dark" },
          { [styles.lightActive]: activeColour === "light" },
          { [styles.darkInactive]: inactiveColour === "dark" },
          { [styles.lightInactive]: inactiveColour === "light" },
          { [styles.h_3dx]: animation === "3dx" },
          { [styles.h_3dx_r]: animation === "3dx_reverse" },
          { [styles.h_3dy]: animation === "3dy" },
          { [styles.h_3dy_r]: animation === "3dy_reverse" },
          { [styles.h_3dxy]: animation === "3dxy" },
          { [styles.h_3dxy_r]: animation === "3dxy_reverse" },
          { [styles.arrow]: animation === "arrow" },
          { [styles.arrow_r]: animation === "arrow_reverse" },
          { [styles.arrowalt]: animation === "arrowalt" },
          { [styles.arrowalt_r]: animation === "arrowalt_reverse" },
          { [styles.arrowturn]: animation === "arrowturn" },
          { [styles.arrowturn_r]: animation === "arrowturn_reverse" },
          { [styles.boring]: animation === "boring" },
          { [styles.collapse]: animation === "collapse" },
          { [styles.collapse_r]: animation === "collapse_reverse" },
          { [styles.elastic]: animation === "elastic" },
          { [styles.elastic_r]: animation === "elastic_reverse" },
          { [styles.emphatic]: animation === "emphatic" },
          { [styles.emphatic_r]: animation === "emphatic_reverse" },
          { [styles.minus]: animation === "minus" },
          { [styles.slider]: animation === "slider" },
          { [styles.slider_r]: animation === "slider_reverse" },
          { [styles.spin]: animation === "spin" },
          { [styles.spin_r]: animation === "spin_reverse" },
          { [styles.spring]: animation === "spring" },
          { [styles.spring_r]: animation === "spring_reverse" },
          { [styles.stand]: animation === "stand" },
          { [styles.stand_r]: animation === "stand_reverse" },
          { [styles.squeeze_r]: animation === "squeeze" },
          { [styles.vortex]: animation === "vortex" },
          { [styles.vortex_r]: animation === "vortex_reverse" }
        )}
        type={"button"}
      >
        <span className={classnames(styles.box)}>
          <span className={classnames(styles.inner)}></span>
        </span>
      </button>
    );
  }
}

export default Hamburger;
