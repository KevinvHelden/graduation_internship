import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Tableview.module.css";
import classnames from "classnames";

import { Searchbar, Button } from "../../elements";
import { Table } from "../../collections";

class Tableview extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      initialTablerows: [],
      tableheaderItems: [],
      visibleTableRows: [],
    };
    this.primaryButtonRef = React.createRef();
  }

  static propTypes = {
    /**
     * Wether the tableview should have a searchbar
     */
    searchbar: PropTypes.bool,
    /**
     * The filters that the table should apply
     */
    filters: PropTypes.object,
    /**
     * The data used to fill the table
     */
    data: PropTypes.object.isRequired,
    /**
     * The function for the primary action button
     */
    primaryActionButton: PropTypes.func,
    /**
     * The function for the filter action button
     */
    filterButton: PropTypes.func,
    /**
     * clicking the edit button makes the edit page pop upÎ
     */
    editButton: PropTypes.func,
  };

  static defaultProps = {
    searchbar: false,
  };

  //Initialises the table data
  componentDidMount() {
    this.initTable();
  }

  //Makes the table info dependant on the state of this view so it can be edited
  initTable = () => {
    const rowArray = [];
    const headerArray = [];
    //All data used in the table
    const { data } = this.props;
    //Adds rows of table to state
    data && data.tableRows.map((row) => rowArray.push(row));
    this.setState({
      initialTablerows: rowArray,
      visibleTableRows: rowArray,
    });
    //Adds headeritems of table to state
    data &&
      data.tableHeaderItems.map((headerItem) => headerArray.push(headerItem));
    this.setState({
      tableheaderItems: headerArray,
    });
  };

  //Update the table rows with a new array
  updateRows = (updatedRows) => {
    this.setState({
      visibleTableRows: updatedRows,
    });
  };

  render() {
    const {
      searchbar,
      editButton,
      deleteButton,
      primaryActionButton,
      filterButton,
    } = this.props;
    const { initialTablerows, tableheaderItems, visibleTableRows } = this.state;
    const { updateRows } = this;

    return (
      <div className={classnames(styles.root)}>
        <div className={classnames(styles.actions)}>
          <Button
            text={"Add article"}
            iconBefore={"add"}
            clickFunc={primaryActionButton}
          />
          {filterButton && (
            <Button
              text={"Filter"}
              variant={"secondary"}
              iconBefore={"filter"}
              clickFunc={filterButton}
            />
          )}
          {searchbar && (
            <div className={classnames(styles.searchbar)}>
              <Searchbar searchItems={initialTablerows} typeFunc={updateRows} />
            </div>
          )}
        </div>
        <div className={classnames(styles.table)}>
          <Table
            headerItems={tableheaderItems}
            rows={visibleTableRows}
            editItem={editButton}
            deleteButton={deleteButton}
          />
        </div>
      </div>
    );
  }
}

export default Tableview;
