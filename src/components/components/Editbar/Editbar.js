import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Editbar.module.css";
import classnames from "classnames";
import RootRef from "@material-ui/core/RootRef";

import { Button } from "../../elements";
import { Text } from "../../primitives";

class Editbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.editButtonRef = React.createRef();
  }

  static propTypes = {
    /**
     * An array of the selected items
     */
    selected: PropTypes.array.isRequired,
    /**
     * Clicking the edit button makes the edit screen pop up
     */
    editFunc: PropTypes.func.isRequired,
  };

  static defaultProps = {
    selected: [],
  };

  componentDidMount() {
    const { editFunc } = this.props;
    editFunc && this.editButtonRef.current.addEventListener("click", editFunc);
  }

  componentWillUnmount() {
    const { editFunc } = this.props;
    editFunc && this.editButtonRef.current.addEventListener("click", editFunc);
  }

  //checks if the buttons should be squared or not
  checkScreenWidth = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth && screenWidth >= 768) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    const { checkScreenWidth, editButtonRef } = this;
    const { selected } = this.props;
    const numberOfSelected = selected.length;
    const anythingSelected = numberOfSelected > 0;
    const oneSelected = numberOfSelected === 1;
    const multipleSelected = numberOfSelected > 1;

    checkScreenWidth();

    return (
      <div
        className={classnames(styles.root, {
          [styles.visible]: anythingSelected,
        })}
      >
        <div className={classnames(styles.selected)}>
          <div className={classnames(styles.selectedContainer)}>
            <Text text={numberOfSelected} light strong />
          </div>
          <div className={classnames(styles.selectedCounter)}>
            <Text
              text={!oneSelected ? "items selected" : "item selected"}
              light
              strong
            />
          </div>
        </div>
        <div className={classnames(styles.actions)}>
          <RootRef rootRef={editButtonRef}>
            <Button
              square={checkScreenWidth()}
              text={"Edit article"}
              disabled={multipleSelected}
              variant={"edit"}
              iconBefore={"edit"}
            />
          </RootRef>
          <Button
            square={checkScreenWidth()}
            text={"Delete"}
            variant={"destructive"}
            iconBefore={"delete"}
          />
        </div>
      </div>
    );
  }
}

export default Editbar;
