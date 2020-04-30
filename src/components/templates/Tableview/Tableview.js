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
    const { searchbar } = this.props;
    const { initialTablerows, tableheaderItems, visibleTableRows } = this.state;
    const { updateRows } = this;

    return (
      <div className={classnames(styles.root)}>
        <div className={classnames(styles.actions)}>
          <Button text={"Add article"} iconBefore={"add"} />
          <Button
            text={"Filter"}
            variant={"ghost"}
            iconBefore={"filter_orange"}
          />
          {searchbar && (
            <div className={classnames(styles.searchbar)}>
              <Searchbar searchItems={initialTablerows} typeFunc={updateRows} />
            </div>
          )}
        </div>
        <div className={classnames(styles.table)}>
          <Table headerItems={tableheaderItems} rows={visibleTableRows} />
        </div>
      </div>
    );
  }
}

export default Tableview;
