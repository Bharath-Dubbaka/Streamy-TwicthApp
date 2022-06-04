import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends Component {
  // state = {
  //   isSignedIn: null,
  // };

  // BEFORE ADDING REDUX REDUCER
  // componentDidMount() {
  //   window.gapi.load("client:auth2", () => {
  //     window.gapi.client
  //       .init({
  //         clientId:
  //           "709126930926-0deao81at3d7her2dcibbgl4q0258hom.apps.googleusercontent.com",
  //         scope: "email",
  //         plugin_name: "streamyTwitch",
  //       })
  //       .then(() => {
  //         this.auth = window.gapi.auth2.getAuthInstance();
  //         this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  //         this.auth.isSignedIn.listen(this.onAuthChange);
  //       });
  //   });
  // }

  // AFTER ADDING REDUX REDUCER
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "709126930926-0deao81at3d7her2dcibbgl4q0258hom.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "streamyTwitch",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // BEFORE ADDING REDUX ACTIONS
  // onAuthChange = () => {
  //   this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  // };

  // AFTER ADDING REDUX ACTIONS
  onAuthChange = (
    //  we dont have to write whole this.auth.isSignedIn.get(), we can directly do isSignedIn
    isSignedIn
  ) => {
    if (isSignedIn === true) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn === true) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div style={{ marginTop: "6px" }}>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.authReducer.isSignedIn,
  };
};

export default connect(mapStateToProps, {
  signIn: signIn,
  signOut: signOut,
})(GoogleAuth);
