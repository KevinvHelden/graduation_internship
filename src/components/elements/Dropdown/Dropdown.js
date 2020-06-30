import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.css";
import classnames from "classnames";
import { Text, Icon } from "../../primitives";
import Checkbox from "../Checkbox/Checkbox";

class Dropdown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedVal: ["All values"],
      open: false,
    };
    this.checkboxRef = React.createRef();
  }

  static propTypes = {
    /**
     * The label above the dropdown
     */
    label: PropTypes.string,
  };

  static defaultProps = {
    label: "Dropdown title",
  };

  toggleDropdown = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  selectVal = (value) => {
    this.setState({
      open: false,
      selectedVal: value,
    });
  };

  checkboxClick = (value) => {
    const prevSelected = this.state.selectedVal;
    prevSelected.push(value);
    this.setState({
      selectedVal: prevSelected,
    });
  };

  formatDropdownItems = (dropdownItems) => {
    return dropdownItems.map((item) => (
      <div className={classnames(styles.item)}>
        <Checkbox clickFunc={() => this.checkboxClick(item)} />
        <Text text={item} onClick={() => this.selectVal(item)} />
      </div>
    ));
  };

  render() {
    const { label } = this.props;
    const { selectedVal, open } = this.state;
    const { toggleDropdown, selectVal } = this;
    const dropdownItems = ["val1", "val2", "val3"];

    return (
      <Fragment>
        {label && <Text text={label} strong />}
        <div className={classnames(styles.root, { [styles.open]: open })}>
          <div
            className={classnames(styles.selected, { [styles.open]: open })}
            onClick={toggleDropdown}
          >
            <Text text={selectedVal} />
            <Icon icon={open ? "chevronUp" : "chevronDown"} />
          </div>

          {open && (
            <div className={classnames(styles.content)}>
              <div
                className={classnames(styles.item)}
                onClick={() => selectVal("All values")}
              >
                <Text text={"All values"} />
              </div>
              {this.formatDropdownItems(dropdownItems)}
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Dropdown;
