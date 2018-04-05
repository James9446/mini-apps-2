import React from 'react';
import PriceChart from './PriceChart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      
      <PriceChart />
    );
  }
}

export default App;

module.hot.accept();