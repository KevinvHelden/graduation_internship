import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Table.module.css";
import classnames from "classnames";
import { Tablerow, Checkbox } from "../../elements";
import { Text } from "../../primitives";

import data from "./Fixtures/data";

class Table extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mainChecked: false,
      tablerowUncheckedMain: false,
    };
  }

  static propTypes = {
    /**
     * Shows borders in between table rows
     */
    dividers: PropTypes.bool,
  };

  static defaultProps = {
    dividers: true,
  };

  //The main checkbox was pressed
  selectMainCheckbox = () => {
    const { mainChecked } = this.state;
    //Disable state that says tablerow clicked on master checkbox so that tables changes with this behaviour
    this.setState({ tablerowUncheckedMain: false });
    //Change state of checkbox
    this.setState({ mainChecked: !mainChecked });
  };

  //Turns off main checkbox because of tablerow click
  turnOffMainCheckbox = () => {
    //Enables state that says tablerow clicked on master checkbox so that no other tablerow changes
    this.setState({ tablerowUncheckedMain: true });
    //Turns off main checkbox
    this.setState({ mainChecked: false });
  };

  //Formats the data in the table header
  handleHeaderItems = () => {
    const headerItems = data.tableHeaderItems;
    const returnItems = headerItems.map((headerItem, id) => (
      <div key={id} className={classnames(styles.tableHeaderItemContainer)}>
        <Text key={id} text={headerItem} strong />
      </div>
    ));
    return returnItems;
  };

  //Formats the data in tablerows
  handleRows = () => {
    const { mainChecked, tablerowUncheckedMain } = this.state;
    const { dividers } = this.props;
    const { turnOffMainCheckbox } = this;
    const tablerows = data.tableRows;

    const returnRows = tablerows.map((tablerow) => (
      <Tablerow
        divider={dividers}
        key={tablerow.id}
        selectedProp={mainChecked}
        clickFunc={turnOffMainCheckbox}
        tablerowUncheckedMain={tablerowUncheckedMain}
        invisible={false}
        data={tablerow}
      />
    ));

    return returnRows;
  };

  render() {
    const {
      selectMainCheckbox,
      handleRows,
      handleHeaderItems,
    } = this;
    const { mainChecked } = this.state;
    const headerItems = handleHeaderItems();
    const rows = handleRows();

    return (
      <div className={classnames(styles.root)}>
        <div className={classnames(styles.tableHeader)}>
          <Checkbox checkedProp={mainChecked} clickFunc={selectMainCheckbox} />
          <div className={classnames(styles.tableHeaderItems)}>
            {headerItems}
          </div>
        </div>
        <div className={classnames(styles.tableContent)}>
          {rows}
        </div>
      </div>
    );
  }
}

export default Table;
