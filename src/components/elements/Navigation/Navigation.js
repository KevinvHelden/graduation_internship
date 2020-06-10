import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Navigation.module.css";
import classnames from "classnames";
import { Text } from "../../primitives";
import { Link } from "react-router-dom";
import RootRef from "@material-ui/core/RootRef";

class Navigation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.logOutRef = React.createRef();
  }

  static propTypes = {
    /**
     * The data used in the navigation
     */
    data: PropTypes.object.isRequired,
    /**
     * The way to open the navigation in tablet or phone mode
     */
    active: PropTypes.object.isRequired,
  };

  static defaultProps = {
    data: null,
  };

  static getDerivedStateFromProps(nextProps) {
    return {
      active: nextProps.active,
    };
  }

  componentDidMount() {
    this.logOutRef.current.addEventListener("click", this.logOut);
  }

  componentWillUnmount() {
    this.logOutRef.current.removeEventListener("click", this.logOut);
  }

  logOut = () => {
    console.log("logged out");
  };

  //Dynamically maps all sections to the navigation
  handleContent = (pagesData) => {
    const pages = pagesData.map((page, id) => (
      <div key={id} className={classnames(styles.pageLink)}>
        <Link to={"/" + page.toLowerCase().replace(/\s/g, "")}>
          <Text key={id} text={page} variant={"h5"} strong />
        </Link>
      </div>
    ));
    //Returns formatted pages in the navigation
    return pages;
  };

  render() {
    const { handleContent, logOutRef } = this;
    const { data } = this.props;
    const { active } = this.state;

    return (
      <div className={classnames(styles.root, { [styles.active]: active })}>
        <div className={classnames(styles.brandLogo)}>
          <img src={data.brand.logo} alt={"profile"} />
        </div>
        <div className={classnames(styles.pageLinks)}>
          {handleContent(data.pages)}
          <div className={classnames(styles.logoutLink)}>
            <RootRef rootRef={logOutRef}>
              <Text text={"Log out"} light variant={"h5"} />
            </RootRef>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
