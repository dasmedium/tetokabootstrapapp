import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProfileGithub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: "2ee654ec73aa0e0177d7",
      clientSecret: "4e16c0108c927e42276495d8a2c8cdc2d763bff4",
      count: 5,
      sort: "created: asc",
      repos: []
    };
  }

  render() {
    return (
      <div>
        <h1>TODO: PROFILE GITHUB</h1>
      </div>
    );
  }
}
export default ProfileGithub;
