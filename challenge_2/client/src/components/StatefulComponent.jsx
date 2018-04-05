import React from 'react';
import style from './../main.css';

class StatefulComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <div><button onClick={this.props.onLike}>Like Me</button></div>
      </div>
    );
  }

}

export default StatefulComponent;