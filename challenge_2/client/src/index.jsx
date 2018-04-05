import React from 'react';
import {render} from 'react-dom';
import StatefulComponent from './components/StatefulComponent.jsx';
import StatelessComponent from './components/StatelessComponent.jsx';
import style from './main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderMe: [1, 2, 3]
    };
  }
  
  render () {
    return (
      <div>
        <h1> Up and running! </h1>
        <StatelessComponent />
        <StatefulComponent />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));