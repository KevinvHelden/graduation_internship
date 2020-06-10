import React, { PureComponent, Fragment } from "react";
import styles from "./Add.module.css";
import classnames from "classnames";
import {
  Button,
  Inputfield,
  Textarea,
  ImageSelect,
} from "../../../../../elements";

class AddArticle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: "",
      disableSubmit: !false,
    };
    this.dismissButtonRef = React.createRef();
    this.submitButtonRef = React.createRef();
    this.titleRef = React.createRef();
    this.textRef = React.createRef();
  }

  componentDidMount() {
    this.titleRef.current.addEventListener("input", this.checkForSubmit);
    this.textRef.current.addEventListener("input", this.checkForSubmit);
  }

  componentWillUnmount() {
    this.titleRef.current.removeEventListener("input", this.checkForSubmit);
    this.textRef.current.removeEventListener("input", this.checkForSubmit);
  }

  componentDidUpdate() {
    this.checkForSubmit();
  }

  setImage = (image) => {
    this.setState({ selectedImage: image });
  };

  handleDismiss = () => {
    const { dismissPopupPage } = this.props;
    dismissPopupPage && dismissPopupPage();
  };

  submitArticle = () => {
    const { titleRef, textRef, handleDismiss } = this;
    const { selectedImage } = this.state;
    const exportData = {
      banner: selectedImage,
      title: titleRef.current.value,
      text: textRef.current.value,
    };
    if (this.checkForSubmit) {
      alert("Submitted: " + exportData.title);
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
      this.setState({ disableSubmit: !true });
      return true;
    } else {
      this.setState({ disableSubmit: !false });
      return false;
    }
  };

  render() {
    const {
      setImage,
      titleRef,
      textRef,
      submitArticle,
      handleDismiss,
    } = this;
    const { selectedImage, disableSubmit } = this.state;
    const formattedImage = selectedImage && URL.createObjectURL(selectedImage);

    return (
      <Fragment>
        <div className={classnames(styles.pageContent)}>
          <ImageSelect
            title={"Banner image"}
            selectedImage={formattedImage}
            parentFunc={setImage}
          />
          <Inputfield title={"Title"} reference={titleRef} />
          <Textarea title={"Text"} reference={textRef} />
        </div>
        <div className={classnames(styles.pageActions)}>
          <Button text={"Cancel"} variant={"ghost"} clickFunc={handleDismiss} />
          <Button
            text={"Add article"}
            variant={"success"}
            iconBefore={"add"}
            disabled={disableSubmit}
            clickFunc={submitArticle}
          />
        </div>
      </Fragment>
    );
  }
}

export default AddArticle;
