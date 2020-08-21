import React, { Component } from "react";
import PropTypes from "prop-types";
import Team from "./components/Team";

export class Players extends Component {
  render() {
    return this.props.players.map((player) => (
      <Team players={this.props.players} />
    ));
  }
}

Players.propTypes = {
  player: PropTypes.array.isRequired,
};

export default Players;
