import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./ImageSelect.module.css";
import classnames from "classnames";

import { Text } from "../../primitives";

class ImageSelect extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
    };
    this.inputRef = React.createRef();
  }

  static propTypes = {
    /**
     * The label and placeholder of the ImageSelect
     */
    title: PropTypes.string.isRequired,
    /**
     * The image shown as preview
     */
    selectedImage: PropTypes.string.isRequired,
    /**
     * The preview image is set as prop
     */
    parentFunc: PropTypes.func.isRequired,
    /**
     * Wether the label is visible or not
     */
    hasLabel: PropTypes.bool,
  };

  static defaultProps = {
    hasLabel: true,
  };

  componentDidMount() {
    const { inputRef } = this;
    inputRef.current.addEventListener("change", this.setImage);
  }

  componentWillUnmount() {
    const { inputRef } = this;
    inputRef.current.addEventListener("change", this.setImage);
  }

  setImage = () => {
    const { inputRef } = this;
    const { parentFunc } = this.props;
    const image = inputRef.current.files[0];
    if (image && parentFunc) {
      parentFunc(image);
    }
  };

  render() {
    const { title, hasLabel, selectedImage } = this.props;
    const { inputRef } = this;
    const imageSource = selectedImage && URL.createObjectURL(selectedImage);

    return (
      <div className={classnames(styles.root)}>
        {hasLabel && <Text text={title} strong />}
        <div className={classnames(styles.imageSelect)}>
          <div className={classnames(styles.imageContainer)}>
            <img
              className={classnames(styles.previewImage, {
                [styles.noImageSelected]: !selectedImage,
              })}
              src={imageSource}
              alt={"select"}
            />
          </div>
          <input
            ref={inputRef}
            className={classnames(styles.fileInput, {
              [styles.imageSelected]: selectedImage,
            })}
            type="file"
            accept=".jpg, .jpeg, .png, .svg"
            value={""}
          />
        </div>
      </div>
    );
  }
}

export default ImageSelect;
