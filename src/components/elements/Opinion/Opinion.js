import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./Opinion.module.css";
import classnames from "classnames";
import { Text } from "../../primitives";

class Opinion extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      opinionPercentage: 0,
    };
  }

  static propTypes = {
    /**
     * The percentage the opinion is based on
     */
    opinionPercentage: PropTypes.number.isRequired,
  };

  static getDerivedStateFromProps(nextProps) {
    return {
      opinionPercentage: nextProps.opinionPercentage,
    };
  }

  defineOpinion = () => {
    let opinion = "";
    const opinionPercentage = this.state.opinionPercentage;
    if (opinionPercentage < 20) {
      opinion = "Negative";
    } else if (opinionPercentage < 40 && opinionPercentage > 19) {
      opinion = "Okay";
    } else if (opinionPercentage < 60 && opinionPercentage > 39) {
      opinion = "Neutral";
    } else if (opinionPercentage < 80 && opinionPercentage > 59) {
      opinion = "Positive";
    } else if (opinionPercentage <= 100 && opinionPercentage > 79) {
      opinion = "Very positive";
    }
    return opinion;
  };

  render() {
    const { defineOpinion } = this;
    const { opinionPercentage } = this.props;

    return (
      <div className={classnames(styles.root)}>
        <div
          className={classnames(
              styles.opinionColour,
              { [styles.negative]: opinionPercentage < 20 },
              { [styles.okay]: opinionPercentage < 40 && opinionPercentage > 19 },
              { [styles.neutral]: opinionPercentage < 60 && opinionPercentage > 39 },
              { [styles.positive]: opinionPercentage < 80 && opinionPercentage > 59 },
              { [styles.veryPositive]: opinionPercentage <= 100 && opinionPercentage > 79 }
            )
          }
        />
        <Text text={defineOpinion()} />
      </div>
    );
  }
}

export default Opinion;
