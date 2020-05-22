import React, { PureComponent, Fragment } from "react";
import styles from "./Add.module.css";
import classnames from "classnames";
import {
  Button,
  Inputfield,
  Textarea,
  ImageSelect,
} from "../../../../../elements";
import RootRef from "@material-ui/core/RootRef";

class AddArticle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: "",
    };
    this.dismissButtonRef = React.createRef();
    this.submitButtonRef = React.createRef();
  }

  componentDidMount() {
    this.dismissButtonRef.current.addEventListener("click", this.handleDismiss);
  }

  componentWillUnmount() {
    this.dismissButtonRef.current.addEventListener("click", this.handleDismiss);
  }

  setImage = (image) => {
    this.setState({ selectedImage: image });
  };

  clearInformation = () => {
    this.setState({ selectedImage: "" });
  };

  handleDismiss = () => {
    const { dismissPopupPage } = this.props;
    dismissPopupPage && dismissPopupPage();
    setTimeout(() => {
      this.clearInformation();
    }, 500);
  };

  render() {
    const { dismissButtonRef, submitButtonRef, setImage } = this;
    const { selectedImage } = this.state;

    return (
      <Fragment>
        <div className={classnames(styles.pageContent)}>
          <ImageSelect
            title={"Banner image"}
            selectedImage={selectedImage}
            parentFunc={setImage}
          />
          <Inputfield title={"Title"} />
          <Textarea title={"Text"} />
        </div>
        <div className={classnames(styles.pageActions)}>
          <RootRef rootRef={dismissButtonRef}>
            <Button text={"Cancel"} variant={"ghost"} />
          </RootRef>
          <RootRef rootRef={submitButtonRef}>
            <Button text={"Save"} variant={"success"} iconBefore={"save"} />
          </RootRef>
        </div>
      </Fragment>
    );
  }
}

export default AddArticle;
