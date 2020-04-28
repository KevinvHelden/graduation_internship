import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Editbar.module.css";
import classnames from "classnames";

import { Button } from "../../elements";
import { Text } from "../../primitives";

class Editbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * An example propType
     */
    selected: PropTypes.array.isRequired,
  };

  static defaultProps = {
    selected: [],
  };

  render() {
    const { selected } = this.props;
    const numberOfSelected = selected.length;

    return (
      <div
        className={classnames(styles.root, {
          [styles.visible]: numberOfSelected > 0,
        })}
      >
        <div className={classnames(styles.selected)}>
          <div className={classnames(styles.selectedContainer)}>
            <Text text={numberOfSelected} light strong />
          </div>
          <Text
            text={numberOfSelected !== 1 ? "items selected" : "item selected"}
            light
            strong
          />
        </div>
        <div className={classnames(styles.actions)}>
          <Button text={"View article"} disabled={numberOfSelected > 1} iconBefore={"view"} />
          <Button
            text={"Edit article"}
            disabled={numberOfSelected > 1}
            variant={"secondary"}
            iconBefore={"edit"}
          />
          <Button text={"Delete"} variant={"destructive"} iconBefore={"delete"} />
        </div>
      </div>
    );
  }
}

export default Editbar;
