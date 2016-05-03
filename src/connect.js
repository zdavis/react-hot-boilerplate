import hoistStatics from 'hoist-non-react-statics'
import React, { Component, createElement } from 'react';

export default function connect() {

  return function wrapWithConnect(WrappedComponent) {

    class Connect extends Component {

      render() {
        return createElement(WrappedComponent, this.props);
      }

    }
    return hoistStatics(Connect, WrappedComponent)
  }

}