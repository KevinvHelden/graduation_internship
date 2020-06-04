import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./List.module.css";
import classnames from "classnames";
import { ListItem } from "../";

class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
    };
  }

  static propTypes = {
    /**
     * The items in the list
     */
    listItems: PropTypes.array.isRequired,
    /**
     * The function of the action button
     */
    actionFunc: PropTypes.func,
    /**
     * The way the list is shown
     */
    variant: PropTypes.oneOf(["ordered", "unordered"]),
  };

  static defaultProps = {
    actionFunc: null,
    variant: "unordered",
  };

  static getDerivedStateFromProps(nextProps) {
    return {
      listItems: nextProps.listItems,
    };
  }

  formatListItems = () => {
    const { actionFunc } = this.props;
    const { listItems } = this.state;
    const items = listItems.map((listItem) => (
      <ListItem listItem={listItem} actionFunc={actionFunc} />
    ));
    return items;
  };

  render() {
    const { variant } = this.props;
    const { formatListItems } = this;

    return (
      <div className={classnames(styles.root)}>
        {variant === "unordered" && <ul>{formatListItems()}</ul>}
        {variant === "ordered" && <ol>{formatListItems()}</ol>}
      </div>
    );
  }
}

export default List;
