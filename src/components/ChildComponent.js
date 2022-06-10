import React from 'react';
export default class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>============ Methods as Props ==============</h1>
        <button type="button" onClick={() => this.props.handleClick()}>
          Greet Parent
        </button>
      </div>
    );
  }
}
