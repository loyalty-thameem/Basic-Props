import React from 'react';
import ParentComponent from './components/ParentComponent';
import ChildComponent from './components/ChildComponent';
export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* <ParentComponent /> */}
        <ChildComponent />
      </div>
    );
  }
}
