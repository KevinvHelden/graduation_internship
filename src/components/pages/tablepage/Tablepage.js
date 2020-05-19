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
      popupPage: { active: false, template: "user", purpose: "add", title: "" },
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
    this.setState({
      popupPage: { active: true, template: "article", purpose: "add" },
    });
  };

  editItem = () => {
    this.setState({
      popupPage: { active: true, template: "article", purpose: "edit" },
    });
  };

  dismissPopupPage = () => {
    const { popupPage } = this.state;
    this.setState({
      popupPage: {
        active: false,
        template: popupPage.template,
        purpose: popupPage.purpose,
      },
    });
  };

  render() {
    const { addItem, editItem, dismissPopupPage } = this;
    const { title, data } = this.props;
    const { popupPage } = this.state;

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
          active={popupPage.active}
          template={popupPage.template}
          purpose={popupPage.purpose}
          dismissPopupPage={dismissPopupPage}
        />
      </Fragment>
    );
  }
}

export default Tablepage;
