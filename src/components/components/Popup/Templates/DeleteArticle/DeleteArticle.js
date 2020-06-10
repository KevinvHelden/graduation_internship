import React, { PureComponent } from "react";
import styles from "./DeleteArticle.module.css";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Text } from "../../../../primitives";
import { Button, List } from "../../../../elements";

class DeleteArticle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
    };
  }

  static propTypes = {
    /**
     * The data shown in the popup
     */
    data: PropTypes.array.isRequired,
    /**
     * The function to dismiss the popup
     */
    dismissPopup: PropTypes.func.isRequired,
  };

  static defaultProps = {
    active: null,
  };

  componentDidMount() {
    this.formatListItems();
  }

  formatListItems = () => {
    const { data } = this.props;
    const listItems = [];
    data.map((data) => listItems.push(data));
    this.setState({ listItems: listItems });
  };

  deleteAllItems = () => {
    console.log(this.state.listItems);
  };

  deleteListItem = (rowId) => {
    const { dismissPopup } = this.props;
    const { listItems } = this.state;
    const newRowsList = listItems.filter((row) => row.id !== rowId);
    const rowsListIsEmpty = newRowsList.length <= 0;
    if (rowsListIsEmpty) {
      dismissPopup();
    } else {
      this.setState({ listItems: newRowsList });
    }
  };

  render() {
    const { dismissPopup } = this.props;
    const { deleteListItem, deleteAllItems } = this;
    const { listItems } = this.state;

    return (
      <div className={classnames(styles.root)}>
        <Text text={"Delete articles"} variant={"h1"} />
        <Text
          text={
            listItems.length === 1
              ? "You are about to delete this article, are you sure?"
              : `You are about to delete these ${listItems.length} articles, are you sure?`
          }
          strong
        />
        <div className={classnames(styles.articles)}>
          <List
            listItems={listItems}
            actionFunc={deleteListItem}
            variant={"ordered"}
          />
        </div>
        <div className={classnames(styles.actions)}>
          <Button text={"Go back"} variant={"ghost"} clickFunc={dismissPopup} />
          <Button
            text={"Delete"}
            variant={"destructive"}
            iconBefore={"delete"}
            clickFunc={deleteAllItems}
          />
        </div>
      </div>
    );
  }
}

export default DeleteArticle;
