import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.css";
import classnames from "classnames";
import { Button } from "..";
import { Text } from "../../primitives";

class ListItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * The list item with at least a title and id
     */
    listItem: PropTypes.object,
    /**
     * The function of the action button
     */
    actionFunc: PropTypes.func,
  };

  static defaultProps = {
    actionFunc: null,
  };

  handleAction = () => {
    const { listItem, actionFunc } = this.props;
    actionFunc(listItem.id);
  }

  render() {
    const { listItem } = this.props;
    const { handleAction } = this;

    return (
      <li className={classnames(styles.root)}>
        <Text text={listItem.title} />
        <Button
          text={"Don't delete"}
          variant={"word"}
          clickFunc={handleAction}
        />
      </li>
    );
  }
}

export default ListItem;
