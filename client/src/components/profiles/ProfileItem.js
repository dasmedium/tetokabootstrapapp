import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    const AvatarIcon = () => {
      if (profile.user !== null) {
        return (
          <img src={profile.user.avatar} alt="" className="rounded-circle" />
        );
      } else {
        return <i className="far fa-user rounded-circle" />;
      }
    };

    const UserName = () => {
      if (profile.user !== null) {
        return profile.user.name;
      } else {
        return "Inactive User";
      }
    };

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-2">
            <AvatarIcon />
          </div>
          <div className="col-lg-6 col-md-4 col-8">
            <h3>
              <UserName />
            </h3>
            <p>
              {profile.status}{" "}
              {isEmpty(profile.company) ? null : (
                <span>at {profile.company}</span>
              )}
            </p>
            <p>
              {isEmpty(profile.location) ? null : (
                <span>{profile.location}</span>
              )}
            </p>
            <Link to={`/profile/${profile.handle}`} className="btn btn-info">
              Vew Profile
            </Link>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <h4>Skill Set</h4>
            <ul className="list-group">
              {profile.skills.slice(0, 4).map((skill, index) => (
                <li key={index} className="list-group-item">
                  <i className="fa fa-check pr-1" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
