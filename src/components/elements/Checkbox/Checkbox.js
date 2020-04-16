import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Checkbox.module.css";
import classnames from "classnames";

class Checkbox extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.checkboxRef = React.createRef();
  }

  static propTypes = {
    /**
     * The checked state coming from a parent
     */
    checkedProp: PropTypes.bool,
    /**
     * An assigned function by the parent
     */
    clickFunc: PropTypes.func,
  };

  static defaultProps = {
    checkedProp: null,
    clickFunc: null,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.checkedProp !== state.checked) {
      return {
        checked: props.checkedProp,
      };
    }
  }

  componentDidMount() {
    const { clickFunc } = this.props;
    this.checkboxRef.current.addEventListener("click", this.toggleCheck);
    this.checkboxRef.current.addEventListener("click", clickFunc);
  }

  componentWillUnmount() {
    const { clickFunc } = this.props;
    this.checkboxRef.current.removeEventListener("click", this.toggleCheck);
    this.checkboxRef.current.removeEventListener("click", clickFunc);
  }

  toggleCheck = () => {
    const checked = this.state.checked;
    checked
      ? this.setState({ checked: false })
      : this.setState({ checked: true });
  };

  render() {
    const { checked } = this.state;
    const { checkboxRef } = this;

    return (
      <label className={classnames(styles.root)}>
        <input type={"checkbox"} checked={checked} />
        <span ref={checkboxRef} className={classnames(styles.checkmark)} />
      </label>
    );
  }
}

export default Checkbox;
