import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./Table.module.css";
import classnames from "classnames";
import { Tablerow, Checkbox } from "../../elements";
import { Text } from "../../primitives";
import { Editbar } from "../../components";

class Table extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mainChecked: false,
      tablerowUncheckedMain: false,
      selectedRows: [],
    };
  }

  static propTypes = {
    /**
     * Shows borders in between table rows
     */
    dividers: PropTypes.bool,
    /**
     * The data used to fill the header
     */
    headerItems: PropTypes.array.isRequired,
    /**
     * The data used to fill the rows
     */
    rows: PropTypes.array.isRequired,
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

  checkIfSelected = (id, selectedState) => {
    const { selectedRows } = this.state;
    const selectedArr = [].concat(selectedRows);
    //Find the index of the deselected row
    const arrIndex = selectedArr.findIndex((i) => i.id === id);
    //The tablerow was selected and isn't in the current selected array
    if (
      selectedState &&
      !selectedRows.includes({ id: id, selected: selectedState })
    ) {
      console.log("I got selected.");
      selectedArr.push({ id: id, selected: selectedState });
      //The tablerow was deselected and is in the current selected array
    } else if (
      !selectedState &&
      selectedRows.includes({ id: id, selected: selectedState })
    ) {
      console.log("I got deselected.");
      selectedArr.splice(arrIndex, 1);
    } else if (
      selectedState &&
      selectedRows.includes({ id: id, selected: selectedState })
    ) {
      console.log("I got selected but was already in the array...");
      selectedArr.splice(arrIndex, 1);
    } else if (
      !selectedState &&
      !selectedRows.includes({ id: id, selected: selectedState })
    ) {
      console.log(
        "I got deselected but i wasn't in the array in the first place..."
      );
      selectedArr.splice(arrIndex, 1);
    }
    this.setState({
      selectedRows: selectedArr,
    });
    console.log(selectedArr);
  };

  handleRowFunctions = () => {
    this.turnOffMainCheckbox();
  };

  //Determines how many items should be shown after the row title
  formatData = (data) => {
    //Width of the screen
    const screenWidth = window.innerWidth;
    //How big the return array should be
    let size = 0;
    //This array will return all formatted items
    let returnArray = [];
    //laptop size, show first 4 items
    if (screenWidth >= 1200) {
      size = 4;
      returnArray = data && data.slice(0, size);
      return returnArray;
    }
    //tablet size, show 2 items
    else if (screenWidth >= 768) {
      size = 2;
      returnArray = data && data.slice(0, size);
      return returnArray;
    }
    //phone size, show 1 item
    else if (screenWidth < 768) {
      size = 1;
      returnArray = data && data.slice(0, size);
      return returnArray;
    }
  };

  //Formats the data in the table header
  handleHeaderItems = () => {
    const { headerItems } = this.props;
    const propsHeaderItems = headerItems;
    const formattedData = this.formatData(propsHeaderItems);
    const returnItems =
      formattedData &&
      formattedData.map((headerItem, id) => (
        <div key={id} className={classnames(styles.tableHeaderItemContainer)}>
          <Text key={id} text={headerItem} strong />
        </div>
      ));
    return returnItems;
  };

  //Formats the data in tablerows
  handleRows = () => {
    const { mainChecked, tablerowUncheckedMain } = this.state;
    const { dividers, rows } = this.props;
    const { handleRowFunctions, checkIfSelected } = this;
    const tablerows = rows;

    const returnRows =
      tablerows &&
      tablerows.map((tablerow) => (
        <Tablerow
          key={tablerow.id}
          divider={dividers}
          selectedProp={mainChecked}
          clickFunc={handleRowFunctions}
          updateFunc={checkIfSelected}
          tablerowUncheckedMain={tablerowUncheckedMain}
          invisible={false}
          data={tablerow}
        />
      ));

    return returnRows;
  };

  render() {
    const { selectMainCheckbox, handleRows, handleHeaderItems } = this;
    const { mainChecked, selectedRows } = this.state;
    const headerItems = handleHeaderItems();
    const rows = handleRows();

    return (
      <Fragment>
        <div className={classnames(styles.root)}>
          <div className={classnames(styles.tableHeader)}>
            <Checkbox
              checkedProp={mainChecked}
              clickFunc={selectMainCheckbox}
            />
            <div className={classnames(styles.tableHeaderItems)}>
              {headerItems}
            </div>
          </div>
          <div className={classnames(styles.tableContent)}>{rows}</div>
        </div>
        <Editbar selected={selectedRows} />
      </Fragment>
    );
  }
}

export default Table;
