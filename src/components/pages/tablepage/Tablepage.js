import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./Tablepage.module.css";
import classnames from "classnames";
import { Text } from "../../primitives";
import { Tableview } from "../../templates";
import { PopupPage, Popup } from "../../components";

class Tablepage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      popupPage: {
        active: false,
        template: "",
        purpose: "",
        title: "",
        data: {},
      },
      popup: { active: false, template: "", purpose: "" },
      selectedRows: [],
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

  getData = (tableRowID) => {
    const data = this.props.data.tableRows;
    return data[tableRowID];
  };

  addArticle = () => {
    this.setState({
      popupPage: { active: true, template: "article", purpose: "add" },
    });
  };

  editArticle = (selectedRow) => {
    const data = this.getData(selectedRow);
    this.setState({
      popupPage: {
        active: true,
        template: "article",
        purpose: "edit",
        data: data,
      },
    });
  };

  openDeleteArticles = (selectedIDs) => {
    //All rows in the table
    const allRows = this.props.data.tableRows;
    // filters all rows for the selected id's. The id's come from the editbar
    const allSelectedRows = allRows.filter((row) =>
      selectedIDs.includes(row.id)
    );
    this.setState({
      popup: { active: true, template: "article", purpose: "delete" },
      selectedRows: allSelectedRows,
    });
  };

  dismissPopupPage = () => {
    const { popupPage } = this.state;
    this.setState({
      popupPage: {
        active: false,
        template: popupPage.template,
        purpose: popupPage.purpose,
        data: {},
      },
    });
  };

  dismissPopup = () => {
    this.setState({
      popup: { active: false, template: "article", purpose: "delete" },
    });
  };

  render() {
    const {
      addArticle,
      editArticle,
      openDeleteArticles,
      dismissPopupPage,
      dismissPopup,
    } = this;
    const { title, data } = this.props;
    const { popupPage, popup, selectedRows } = this.state;

    return (
      <Fragment>
        <div className={classnames(styles.mainTitle)}>
          <Text text={title} variant={"h1"} />
        </div>
        <div className={classnames(styles.mainContent)}>
          <Tableview
            data={data}
            primaryActionButton={addArticle}
            editButton={editArticle}
            deleteButton={openDeleteArticles}
            searchbar
          />
        </div>
        <PopupPage
          active={popupPage.active}
          template={popupPage.template}
          purpose={popupPage.purpose}
          data={popupPage.data}
          dismissPopupPage={dismissPopupPage}
        />
        <Popup
          active={popup.active}
          template={popup.template}
          purpose={popup.purpose}
          data={selectedRows}
          dismissPopup={dismissPopup}
        />
      </Fragment>
    );
  }
}

export default Tablepage;
