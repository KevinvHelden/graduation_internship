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
      readyForSubmit: !false,
    };
    this.dismissButtonRef = React.createRef();
    this.submitButtonRef = React.createRef();
    this.titleRef = React.createRef();
    this.textRef = React.createRef();
  }

  componentDidMount() {
    this.titleRef.current.addEventListener("input", this.checkForSubmit);
    this.textRef.current.addEventListener("input", this.checkForSubmit);
    this.submitButtonRef.current.addEventListener("click", this.submitArticle);
    this.dismissButtonRef.current.addEventListener("click", this.handleDismiss);
  }

  componentWillUnmount() {
    this.titleRef.current.removeEventListener("input", this.checkForSubmit);
    this.textRef.current.removeEventListener("input", this.checkForSubmit);
    this.submitButtonRef.current.removeEventListener(
      "click",
      this.submitArticle
    );
    this.dismissButtonRef.current.removeEventListener(
      "click",
      this.handleDismiss
    );
  }

  componentDidUpdate() {
    this.checkForSubmit();
  }

  setImage = (image) => {
    this.setState({ selectedImage: image });
  };

  clearInformation = () => {
    const { titleRef, textRef } = this;
    this.setState({ selectedImage: "" });
    titleRef.current.value = "";
    textRef.current.value = "";
  };

  handleDismiss = () => {
    const { dismissPopupPage } = this.props;
    dismissPopupPage && dismissPopupPage();
    setTimeout(() => {
      this.clearInformation();
    }, 500);
  };

  submitArticle = () => {
    const { titleRef, textRef, handleDismiss } = this;
    const { selectedImage } = this.state;
    const data = {
      banner: URL.createObjectURL(selectedImage),
      title: titleRef.current.value,
      text: textRef.current.value,
    };
    if(this.checkForSubmit){
      alert("Submitted " + data.title);
      handleDismiss();
    }
  };

  checkForSubmit = () => {
    const { titleRef, textRef } = this;
    const { selectedImage } = this.state;
    const imageSelected = selectedImage !== "";
    const titleNotEmpty = titleRef.current && titleRef.current.value !== "";
    const textNotEmpty = textRef.current && textRef.current.value !== "";
    if (imageSelected && titleNotEmpty && textNotEmpty) {
      this.setState({readyForSubmit: !true});
      return true
    } else {
      this.setState({readyForSubmit: !false});
      return false
    }
  };

  render() {
    const {
      dismissButtonRef,
      submitButtonRef,
      setImage,
      titleRef,
      textRef,
    } = this;
    const { selectedImage, readyForSubmit } = this.state;

    return (
      <Fragment>
        <div className={classnames(styles.pageContent)}>
          <ImageSelect
            title={"Banner image"}
            selectedImage={selectedImage}
            parentFunc={setImage}
          />
          <Inputfield title={"Title"} reference={titleRef} />
          <Textarea title={"Text"} reference={textRef} />
        </div>
        <div className={classnames(styles.pageActions)}>
          <RootRef rootRef={dismissButtonRef}>
            <Button text={"Cancel"} variant={"ghost"} />
          </RootRef>
          <RootRef rootRef={submitButtonRef}>
            <Button
              text={"Save"}
              variant={"success"}
              iconBefore={"save"}
              disabled={readyForSubmit}
            />
          </RootRef>
        </div>
      </Fragment>
    );
  }
}

export default AddArticle;
