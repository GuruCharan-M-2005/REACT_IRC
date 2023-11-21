import React, { Component } from 'react';

class KaiokenState extends Component {
  render() {
    return <h1>Kaioken State</h1>;
  }
}

class SuperSaiyanState extends Component {
  render() {
    return <h1>SuperSaiyan State</h1>;
  }
}

class GokuApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transformation: 'Kaioken',
    };
  }

  // Function to toggle between Kaioken and SuperSaiyan
  toggleTransformation = () => {
    this.setState((prevState) => ({
      transformation:
        prevState.transformation === 'Kaioken' ? 'SuperSaiyan' : 'Kaioken',
    }));
  };

  render() {
    return (
      <div>
        {this.state.transformation === 'Kaioken' ? (
          <KaiokenState />
        ) : (
          <SuperSaiyanState />
        )}
        <button onClick={this.toggleTransformation}>
           Click
        </button>
      </div>
    );
  }
}

export default GokuApp;
