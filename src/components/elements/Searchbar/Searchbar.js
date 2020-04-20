import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";
import classnames from "classnames";
import { Icon } from "../../primitives";

class Searchbar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visibleDeleteButton: false,
    };
    this.inputRef = React.createRef();
    this.deleteValueRef = React.createRef();
  }

  static propTypes = {
    /**
     * The items it has to search for
     */
    searchItems: PropTypes.array.isRequired,
  };

  static defaultProps = {
    propType: null,
  };

  componentDidMount() {
    //Executes handleSearch whenever input changes
    this.inputRef.current.addEventListener("input", this.handleSearch);
    this.deleteValueRef.current.addEventListener(
      "click",
      this.deleteInputValues
    );
  }

  componentWillUnmount() {
    //Removes onInput function when it is no longer needed
    this.inputRef.current.removeEventListener("input", this.handleSearch);
    this.deleteValueRef.current.removeEventListener(
      "click",
      this.deleteInputValues
    );
  }

  filterFunction = (arrayToSearchIn) => {
    //The searchfield
    const searchField = this.inputRef.current;
    //The value in the searchfield
    const inputValue = searchField.value;
    //Filter given array with searchfield values
    const result = arrayToSearchIn.filter(
      (arrayItem) => arrayItem.toLowerCase().indexOf(inputValue) === 0
    );
    //Return filtered array
    console.log(result);
  };

  shouldShowDeleteButton = () => {
    //The searchfield
    const searchField = this.inputRef.current;
    //Change state to determine if the delete button should be visible
    searchField.value !== ""
      ? this.setState({
          visibleDeleteButton: true,
        })
      : this.setState({
          visibleDeleteButton: false,
        });
  };

  deleteInputValues = () => {
    //The searchfield
    const searchField = this.inputRef.current;
    //Delete the value of the searchfield
    searchField.value = "";
    //Check if it should hide the delete button (it should)
    this.shouldShowDeleteButton();
  };

  handleSearch = () => {
    //Array of items to search for
    const searchItems = this.props.searchItems;
    //Executes searchFunction with searchItems as parameters
    this.filterFunction(searchItems);
    //Decides if it should show the delete button for deleting the input value
    this.shouldShowDeleteButton();
  };

  render() {
    const { inputRef, deleteValueRef } = this;
    const { visibleDeleteButton } = this.state;

    return (
      <div className={classnames(styles.root)}>
        <input
          className={classnames(styles.inner)}
          ref={inputRef}
          type={"text"}
          placeholder={"Search"}
        />
        <Icon
          reference={deleteValueRef}
          visible={visibleDeleteButton}
          icon={"delete"}
        />
      </div>
    );
  }
}

export default Searchbar;
