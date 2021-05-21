import React from "react";
import { connect } from "react-redux";

class User extends React.Component {
  render() {
    if (this.props.isSignedIn && this.props.userName) {
      return (
        <div className="container-sm my-3">
          <h3 style={{ fontFamily: "Architects Daughter", fontSize: "2.7rem" }}>
            Welcome, <strong>{this.props.userName}</strong>
          </h3>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    userName: state.auth.userName,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps)(User);
