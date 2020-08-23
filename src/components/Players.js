import React, { Component } from "react";

export class Players extends Component {
  render() {
    let src = this.props.img;
    return (
      <div>
        <h1>Man utd players</h1>
        <img src={src} />
      </div>
    );
  }
}

export default Players;
