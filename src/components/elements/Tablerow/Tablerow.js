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
      oldSelectedProp: this.props.selectedProp,
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
     * Click functions from parent
     */
    clickFunc: PropTypes.func,
    /**
     * Shows dividers between tablerows
     */
    divider: PropTypes.bool,
  };

  static defaultProps = {
    invisible: false,
    clickFunc: null,
    divider: true,
  };

  componentDidMount() {
    this.tablerowRef.current.addEventListener("click", this.handleClicked);
  }

  componentWillUnmount() {
    this.tablerowRef.current.removeEventListener("click", this.handleClicked);
  }

  //Checks if state of checkedAll boxes has changed, if yes then check or uncheck all rows
  static getDerivedStateFromProps(props, state) {
    if (
      //Checks if the master checkbox in Table component has been pushed
      props.selectedProp !== state.oldSelectedProp &&
      //Checks if the master checkbox in Table has been changed by itself or by another tablerow
      !props.tablerowUncheckedMain
    ) {
      return {
        //Sets selected state equal to master checkbox state
        selected: props.selectedProp,
        //Updates old master checkbox state
        oldSelectedProp: !state.oldSelectedProp,
      };
    } else {
      return null;
    }
  }

  //Selects or deselects this component
  selectFunction = () => {
    const { selected } = this.state;
    //Change state of the tablerow to the opposite
    this.setState({ selected: !selected });
  };

  handleClicked = () => {
    const { clickFunc } = this.props;
    //Checks if there is a click function from parent before executing it
    clickFunc && clickFunc();
    //Selects or deselects this component
    this.selectFunction();
  };

  handleTablerowItems = (data) => {
    const returnData = data.map((dataItem, id) => (
      <div key={id} className={classnames(styles.tablerowItemContainer)}>
        <Text text={dataItem} key={id} />
      </div>
    ));
    return returnData;
  };

  render() {
    const { tablerowRef, selectFunction, handleTablerowItems } = this;
    const { selected } = this.state;
    const { invisible, data, divider } = this.props;

    return (
      <div
        ref={tablerowRef}
        className={classnames(
          styles.root,
          { [styles.selected]: selected },
          { [styles.invisible]: invisible },
          { [styles.divider]: divider }
        )}
      >
        <Checkbox checkedProp={selected} clickFunc={selectFunction} />
        <div className={classnames(styles.tablerowItems)}>
          <div className={classnames(styles.tablerowItemContainer)}>
            <Text text={data.title} />
          </div>
          {handleTablerowItems(data.tablerowItems)}
        </div>
      </div>
    );
  }
}

export default Tablerow;
