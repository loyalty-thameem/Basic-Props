import React from 'react';
import PropTypes from 'prop-types';
export default class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.arrayProp}
          <br />
          {this.props.stringProp}
          <br />
          {this.props.numberProp}
          <br />
          {this.props.booleanProp}
        </h1>
      </div>
    );
  }
}
// Validating prop types
ChildComponent.propTypes = {
  arrayProp: PropTypes.array,
  stringProp: PropTypes.string,
  numberProp: PropTypes.number,
  booleanProp: PropTypes.boolean,
};
//Creating default prop
ChildComponent.defaultProps = {
  arrayProp: ['thameem', 'ansari', 'pop'],
  stringProp: 'myWorld',
  numberProp: 10,
  booleanProp: true,
};
