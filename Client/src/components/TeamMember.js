import React, { Component } from "react";
import img from "../images/DP.png";

export default class TeamMember extends Component {
  render() {
    return (
      <div style={{ margin: "1.5%" }}>
        <img
          src={this.props.img ? this.props.img : img}
          className="ui small circular image"
        />
        <div>
          <p
            style={{
              fontFamily: "Arial Black",
              marginTop: "20px",
              paddingLeft: "15px"
            }}
          >
            {this.props.position ? this.props.position : "Mention Position"}
          </p>
          <h5
            style={{
              fontFamily: "Perpetua",
              marginTop: "0px",
              paddingLeft: "15px"
            }}
          >
            {" "}
            {this.props.name ? this.props.name : "Mention Name Here"}
          </h5>
        </div>
      </div>
    );
  }
}
