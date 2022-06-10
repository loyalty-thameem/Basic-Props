import React from 'react';
import PropTypes from 'prop-types';
export default class ChildComponent extends React.Component {
  // Component inside default props use
  static defaultProps = {
    name: 'stranger',
  };
  render() {
    return (
      <div>
        <h4>Default Props: {this.props.name}</h4>
        {/* <h1>
          {this.props.arrayProp.map((item, index) => {
            return `Student ${index + 1} :${item + (index != 2 ? ', ' : '\n')}`;
          })}
          <br />
          {this.props.stringProp}
          <br />
          {this.props.numberProp}
          <br />
          {this.props.booleanProp}
        </h1> */}
      </div>
    );
  }
}
// Validating prop types
// ChildComponent.propTypes = {
//   arrayProp: PropTypes.array,
//   stringProp: PropTypes.string,
//   numberProp: PropTypes.number,
//   booleanProp: PropTypes.boolean,
// };
//Creating default prop
// ChildComponent.defaultProps = {
//   arrayProp: ['thameem', 'ansari', 'pop'],
//   stringProp: 'myWorld',
//   numberProp: 10,
//   booleanProp: true,
// };
