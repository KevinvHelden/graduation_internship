import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Tablerow.module.css";
import classnames from "classnames";
import { Checkbox } from "../";
import { Text } from "../../primitives";

class Tablerow extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
    this.tablerowRef = React.createRef();
  }

  static propTypes = {
    /**
     * Determines if the talberow should be visible
     */
    invisible: PropTypes.bool,
  };

  static defaultProps = {
    invisible: false,
  };

  componentDidMount() {
    this.tablerowRef.current.addEventListener("click", this.selectFunction);
  }

  componentWillUnmount() {
    this.tablerowRef.current.removeEventListener("click", this.selectFunction);
  }

  selectFunction = () => {
    const selected = this.state.selected;
    selected
      ? this.setState({ selected: false })
      : this.setState({ selected: true });
  };

  handleTablerowItems = (data) => {
    const returnData = data.map((dataItem, id) => (
      <Text text={dataItem} key={id} />
    ));
    return returnData;
  };

  render() {
    const { tablerowRef, selectFunction, handleTablerowItems } = this;
    const { selected } = this.state;
    const { invisible } = this.props;

    const data = {
      title: "Tablerow",
      tablerowItems: ["Item", "Item", "Item"],
    };

    return (
      <div
        ref={tablerowRef}
        className={classnames(
          styles.root,
          { [styles.selected]: selected },
          { [styles.invisible]: invisible }
        )}
      >
        <Checkbox checkedProp={selected} clickFunc={selectFunction} />
        <div className={classnames(styles.tablerowItems)}>
          <Text text={data.title} strong />
          {handleTablerowItems(data.tablerowItems)}
        </div>
      </div>
    );
  }
}

export default Tablerow;
