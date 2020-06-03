import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./Edit.module.css";
import classnames from "classnames";
import {
  Button,
  Inputfield,
  Textarea,
  ImageSelect,
} from "../../../../../elements";
import RootRef from "@material-ui/core/RootRef";

class EditArticle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: props.data.image,
      exportImage: props.data.image,
      title: "",
      description: "",
      disableSubmit: false,
    };
    this.dismissButtonRef = React.createRef();
    this.submitButtonRef = React.createRef();
    this.titleRef = React.createRef();
    this.textRef = React.createRef();
  }

  static propTypes = {
    /**
     * The data of the selected row
     */
    data: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.titleRef.current.addEventListener("input", this.checkForSubmit);
    this.textRef.current.addEventListener("input", this.checkForSubmit);
    this.submitButtonRef.current.addEventListener("click", this.editArticle);
    this.dismissButtonRef.current.addEventListener("click", this.handleDismiss);
  }

  componentWillUnmount() {
    this.titleRef.current.removeEventListener("input", this.checkForSubmit);
    this.textRef.current.removeEventListener("input", this.checkForSubmit);
    this.submitButtonRef.current.removeEventListener("click", this.editArticle);
    this.dismissButtonRef.current.addEventListener("click", this.handleDismiss);
  }

  setImage = (image) => {
    const formattedImage = URL.createObjectURL(image);
    this.setState({ selectedImage: formattedImage, exportImage: image });
  };

  handleDismiss = () => {
    const { dismissPopupPage } = this.props;
    dismissPopupPage && dismissPopupPage();
  };

  editArticle = () => {
    const { titleRef, textRef, handleDismiss } = this;
    const { exportImage } = this.state;
    const exportData = {
      banner: exportImage,
      title: titleRef.current.value,
      text: textRef.current.value,
    };
    if (this.checkForSubmit) {
      alert("Edited: " + exportData.title);
      handleDismiss();
    }
  };

  checkForSubmit = () => {
    //don't check for image because that is always set
    const { titleRef, textRef } = this;
    const titleNotEmpty = titleRef.current && titleRef.current.value !== "";
    const textNotEmpty = textRef.current && textRef.current.value !== "";
    if (titleNotEmpty && textNotEmpty) {
      this.setState({ disableSubmit: !true });
      return true;
    } else {
      this.setState({ disableSubmit: !false });
      return false;
    }
  };

  render() {
    const {
      dismissButtonRef,
      setImage,
      titleRef,
      textRef,
      submitButtonRef,
    } = this;
    const { data } = this.props;
    const { disableSubmit, selectedImage } = this.state;

    return (
      <Fragment>
        <div className={classnames(styles.pageContent)}>
          <ImageSelect
            title={"Banner image"}
            selectedImage={selectedImage}
            parentFunc={setImage}
          />
          <Inputfield title={"Title"} reference={titleRef} value={data.title} />
          <Textarea
            title={"Text"}
            reference={textRef}
            value={data.description}
          />
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
              disabled={disableSubmit}
            />
          </RootRef>
        </div>
      </Fragment>
    );
  }
}

export default EditArticle;
