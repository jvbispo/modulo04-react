import React, { Component } from "react";

class TechList extends Component {
  state = {
    techs: ["node.js", "react js", "react native"]
  };
  render() {
    console.log(this.state);
    return (
      <ul>
        <li>Node.js!</li>
        <li>react js!</li>
        <li>react native!</li>
      </ul>
    );
  }
}
export default TechList;
