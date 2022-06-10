import React from 'react';
import ChildComponent from './ChildComponent';
export default class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: 'Parent',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert(`Hello ${this.state.parentName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent handleClick={this.handleClick} />
      </div>
    );
  }
}
