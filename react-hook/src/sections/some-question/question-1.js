import React, { Component, useRef } from 'react';

function Content() {
  const divRef = useRef(null);
  return (
    <div ref={divRef}>
      <p>class中不可以直接使用hooks，但可以使用hooks编写的组件。</p>
    </div>
  );
}

class Question1 extends Component {
  render() {
    return <Content />;
  }
}

export default Question1;
