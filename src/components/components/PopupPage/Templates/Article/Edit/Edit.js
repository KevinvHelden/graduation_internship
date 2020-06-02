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
    this.state = {};
    this.dismissButtonRef = React.createRef();
  }

  static propTypes = {
    /**
     * The data of the selected row
     */
    data: PropTypes.object.isRequired,
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
    const { dismissButtonRef } = this;
    const { data } = this.props;
    return (
      <Fragment>
        <div className={classnames(styles.pageContent)}>
          <ImageSelect title={"Banner image"} />
          <Inputfield title={"Title"} value={data.title}/>
          <Textarea title={"Text"} />
        </div>
        <div className={classnames(styles.pageActions)}>
          <RootRef rootRef={dismissButtonRef}>
            <Button text={"Cancel"} variant={"ghost"} />
          </RootRef>
          <Button text={"Save"} variant={"success"} iconBefore={"save"} />
        </div>
      </Fragment>
    );
  }
}

export default EditArticle;
