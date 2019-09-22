import React from 'react';

import { PageResizer } from '../../components/PageResizer';

export function withPageResizer(ChildrenComponent){
  return class extends React.Component {
    onChildrenRender = (height, width) => (
      <ChildrenComponent
        height={height}
        width={width}
      />
    )

    render() {
      return (
        <PageResizer
          childrenRender={this.onChildrenRender}
        />
      );
    }
  }
}