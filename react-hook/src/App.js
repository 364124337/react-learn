import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import UseState from './sections/use-state';
import UseEffect from './sections/use-effect';
import UseLayoutEffect from './sections/use-layout-effect';
import UseRef from './sections/use-ref'
import UseContext from './sections/use-context'
import UseReducer from './sections/use-reducer'
import UseImperativeHandle from './sections/use-imperative-handle'
import UseCallback from './sections/use-callback'
import UseMemo from './sections/use-memo'
import UseUserInfo from './sections/use-info'
import SomeQuestion from './sections/some-question'


function App() {
  const links = [
    'use-state',
    'use-effect',
    'use-layout-effect',
    'use-ref',
    'use-context',
    'use-reducer',
    'use-imperative-handle',
    'use-callback',
    'use-memo',
    'use-user-info',
    'context-reducer',
    'some-question'
  ];
  return (
    <Router>
      <div className="container">
        <ul className="routers">
          {links.map((link, index) => {
            const to = `/${link}`
            return (
              <li key={index}>
                <Link to={to}>{link}</Link>
              </li>
            )
          })}
        </ul>
        <div className="demos">
          <Route path="/use-state" component={UseState}/>
          <Route path="/use-effect" component={UseEffect}/>
          <Route path="/use-layout-effect" component={UseLayoutEffect}/>
          <Route path="/use-ref" component={UseRef}/>
          <Route path="/use-context" component={UseContext}/>
          <Route path="/use-reducer" component={UseReducer}/>
          <Route path="/use-imperative-handle" component={UseImperativeHandle}/>
          <Route path="/use-callback" component={UseCallback}/>
          <Route path="/use-memo" component={UseMemo}/>
          <Route path="/use-user-info" component={UseUserInfo}/>
          <Route path="/some-question" component={SomeQuestion}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
