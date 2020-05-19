import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./Tablepage.module.css";
import classnames from "classnames";
import { Text } from "../../primitives";
import { Tableview } from "../../templates";
import { PopupPage } from "../../components";

class Tablepage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      popupTitle: "",
      popupActive: false,
    };
  }

  static propTypes = {
    /**
     * The data shown in the table
     */
    data: PropTypes.object.isRequired,
  };

  static defaultProps = {
    // data: null
  };

  addItem = () => {
    this.setState({ popupTitle: "Add article", popupActive: true });
  };

  editItem = () => {
    this.setState({ popupTitle: "Edit article", popupActive: true });
  };

  dismissPopupPage = () => {
    this.setState({ popupActive: false });
  };

  render() {
    const { addItem, editItem, dismissPopupPage } = this;
    const { title, data } = this.props;
    const { popupTitle, popupActive } = this.state;

    return (
      <Fragment>
        <div className={classnames(styles.mainTitle)}>
          <Text text={title} variant={"h2"} />
        </div>
        <div className={classnames(styles.mainContent)}>
          <Tableview
            data={data}
            primaryActionButton={addItem}
            editButton={editItem}
            searchbar
          />
        </div>
        <PopupPage
          title={popupTitle}
          active={popupActive}
          dismissPopupPage={dismissPopupPage}
        />
      </Fragment>
    );
  }
}

export default Tablepage;
