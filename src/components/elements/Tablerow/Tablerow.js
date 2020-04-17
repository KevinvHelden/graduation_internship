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
    /**
     * The data shown in the tablerow
     */
    data: PropTypes.object.isRequired,
    /**
     * Update functions from parent
     */
    clickFunc: PropTypes.func,
  };

  static defaultProps = {
    invisible: false,
    clickFunc: null,
  };

  componentDidMount() {
    this.tablerowRef.current.addEventListener("click", this.handleClicked);
  }

  componentWillUnmount() {
    this.tablerowRef.current.removeEventListener("click", this.handleClicked);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.selectedProp) {
      return { selected: props.selectedProp };
    }
  }

  //Selects or deselects this component
  selectFunction = () => {
    const selected = this.state.selected;
    selected
      ? this.setState({ selected: false })
      : this.setState({ selected: true });
  };

  handleClicked = () => {
    //Deselects the select all tables function
    this.props.clickFunc && this.props.clickFunc();
    //Selects or deselects this component
    this.selectFunction();
  };

  handleTablerowItems = (data) => {
    const returnData = data.map((dataItem, id) => (
      <div className={classnames(styles.tablerowItemContainer)}>
        <Text text={dataItem} key={id} />
      </div>
    ));
    return returnData;
  };

  render() {
    const { tablerowRef, selectFunction, handleTablerowItems } = this;
    const { selected } = this.state;
    const { invisible, data } = this.props;

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
          <div className={classnames(styles.tablerowItemContainer)}>
            <Text text={data.title} strong />
          </div>
          {handleTablerowItems(data.tablerowItems)}
        </div>
      </div>
    );
  }
}

export default Tablerow;
