import React, { PureComponent, Fragment } from "react";
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
      checkedAll: false,
      rowsList: [],
      visibleRowList: [],
      selectedRowList: [],
    };
    this.contentRef = React.createRef();
  }

  static propTypes = {
    /**
     * Shows dividers between tablerows
     */
    dividers: PropTypes.bool,
  };

  static defaultProps = {
    dividers: false,
  };

  //Function to enable checkedAll state
  selectAllRows = () => {
    const checkedAll = this.state.checkedAll;
    checkedAll
      ? this.setState({ checkedAll: false })
      : this.setState({ checkedAll: true });
  };

  turnOffSelectAllRows = () => {
      this.setState({ checkedAll: false })
      console.log(this.state.checkedAll);
  }

  //Formats the data in tablerows to place on the page
  handleHeaderItems = () => {
    const headerItems = data.tableHeaderItems;
    const returnItems = headerItems.map((headerItem, id) => (
      <div className={classnames(styles.tableHeaderItemContainer)}>
        <Text key={id} text={headerItem} strong />
      </div>
    ));
    return returnItems;
  };

  //Formats the data in tablerows to place on the page
  handleRows = () => {
    const { checkedAll } = this.state;
    const { dividers } = this.props;
    const { turnOffSelectAllRows } = this;
    const tablerows = data.tableRows;

    const returnRows = tablerows.map((tablerow, id) => (
      <Fragment>
        {dividers && <hr />}
        <Tablerow
          key={id}
          selectedProp={checkedAll}
          clickFunc={turnOffSelectAllRows}
          data={tablerow}
        />
      </Fragment>
    ));

    return returnRows;
  };

  render() {
    const { selectAllRows, contentRef, handleRows, handleHeaderItems } = this;
    const { checkedAll } = this.state;
    const headerItems = handleHeaderItems();
    const rows = handleRows();

    console.log(this.state.rowsList);

    return (
      <div className={classnames(styles.root)}>
        <div className={classnames(styles.tableHeader)}>
          <Checkbox checkedProp={checkedAll} clickFunc={selectAllRows} />
          <div className={classnames(styles.tableHeaderItems)}>
            {headerItems}
          </div>
        </div>
        <div ref={contentRef} className={classnames(styles.tableContent)}>
          {rows}
        </div>
      </div>
    );
  }
}

export default Table;
