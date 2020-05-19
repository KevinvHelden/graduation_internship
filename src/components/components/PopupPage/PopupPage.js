import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./PopupPage.module.css";
import classnames from "classnames";
import { Text } from "../../primitives";
import { Button, Inputfield, Textarea, ImageSelect } from "../../elements";
import RootRef from "@material-ui/core/RootRef";

class PopupPage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.dismissButtonRef = React.createRef();
  }

  static propTypes = {
    /**
     * The title of the popup page
     */
    title: PropTypes.string.isRequired,
    /**
     * The active state of the popup page
     */
    popupActive: PropTypes.bool.isRequired,
    /**
     * The haze dismisses the popup page with this function
     */
    dismissPopupPage: PropTypes.func.isRequired,
  };

  static defaultProps = {
    // title: "Popup page title",
  };

  componentDidMount() {
    const { dismissPopupPage } = this.props;
    dismissPopupPage &&
      this.dismissButtonRef.current.addEventListener("click", dismissPopupPage);
  }

  componentWillUnmount() {
    const { dismissPopupPage } = this.props;
    dismissPopupPage &&
      this.dismissButtonRef.current.addEventListener("click", dismissPopupPage);
  }

  render() {
    const { title, active } = this.props;
    const { dismissButtonRef } = this;

    return (
      <Fragment>
        <div className={classnames(styles.haze, { [styles.active]: active })} />
        <div className={classnames(styles.root, { [styles.active]: active })}>
          <div className={classnames(styles.pageHeader)}>
            <Text text={title} variant={"h2"} />
            <hr />
          </div>
          <div className={classnames(styles.pageContent)}>
            <ImageSelect title={"Banner image"} />
            <Inputfield title={"Title"} />
            <Textarea title={"Text"} />
          </div>
          <div className={classnames(styles.pageActions)}>
            <RootRef rootRef={dismissButtonRef}>
              <Button text={"Cancel"} variant={"ghost"} />
            </RootRef>
            <Button text={"Save"} variant={"success"} iconBefore={"save"} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PopupPage;
