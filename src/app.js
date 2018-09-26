import React, { Component } from "react";
import logo from "./assets/dogs.png";
import "./assets/app.css";

import { connect } from "react-redux";

class App extends Component {
  render() {
    const { fetching, dog, onRequestDog, error } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={dog || logo} className="dogImage" alt="logo" />
        </header>

        {dog ? (
          <p className="App-intro">Keep clicking for new dogs</p>
        ) : (
          <p className="App-intro">Click the Request Button for new dogs!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}

        {error && <p class="errorMsg">Uh oh - something went wrong! Click Again!</p>}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);