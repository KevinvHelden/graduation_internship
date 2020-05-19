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
  }

  static propTypes = {
    /**
     * The label and placeholder of the ImageSelect
     */
    title: PropTypes.string.isRequired,
    /**
     * Wether the label is visible or not
     */
    hasLabel: PropTypes.bool,
  };

  static defaultProps = {
    hasLabel: true,
  };

  render() {
    const { title, hasLabel } = this.props;
    const { selectedImage } = this.props;

    return (
      <div className={classnames(styles.root)}>
        {hasLabel && <Text text={title} strong />}
        <div className={classnames(styles.imageSelect)}>
          <image src={selectedImage} alt={"image select"} />
          <input
            className={classnames(styles.fileInput)}
            type="file"
          />
        </div>
      </div>
    );
  }
}

export default ImageSelect;
