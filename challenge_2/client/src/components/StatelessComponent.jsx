import React from 'react';
import style from './../main.css';

const StatelessComponent = (props) => (
    <div>
      <p> StatelessComponent here </p>
      <div><button onClick={props.onLike}>Like Me</button></div>
    </div>
);

export default StatelessComponent;