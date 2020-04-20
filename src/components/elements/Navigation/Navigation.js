import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Navigation.module.css";
import classnames from "classnames";
import { Text } from "../../primitives";

class Navigation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    /**
     * An example propType
     */
    propType: PropTypes.node,
  };

  static defaultProps = {
    propType: null,
  };

  //Dynamically maps all sections to the navigation
  handleContent = (sectionsData) => {
    //Maps all sections
    const sections = sectionsData.map((section, id) =>
      //One div per section in navigation
      <div key={id} className={classnames(styles.navSection)}>
        {/* Section title */}
        <Text text={section.title} mono light />
        <hr />
        {/* Maps section pages below the title */}
        {section.pages.map((page, id) =>
          <Text
            key={id}
            text={page}
            strong
            light
          />
        )}
      </div>
    );
    //Returns formatted pages in the navigation
    return sections;
  }

  render() {
    const { handleContent } = this;
    const brandInfo = {
      brandName: "Eindhoven Airport",
      sections: [
        {
          title: "Dashboard",
          pages: [
            "Noise",
          ]
        },
        {
          title: "News",
          pages: [
            "Articles",
          ]
        },
        {
          title: "Users",
          pages: [
            "App users",
            "Dashboard users",
          ]
        },
      ]
    };

    return (
      <div className={classnames(styles.root)}>
        <Text text={brandInfo.brandName} variant={"h6"} light />
          {handleContent(brandInfo.sections)}
      </div>
    );
  }
}

export default Navigation;
