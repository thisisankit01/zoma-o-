import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <div>
        Hi
        <h1>Name: {this.props.name}</h1>
      </div>
    );
  }
}

export default Profile;
