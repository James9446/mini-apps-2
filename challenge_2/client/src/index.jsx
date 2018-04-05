import React from 'react';
import {render} from 'react-dom';
import StatefulComponent from './components/StatefulComponent.jsx';
import StatelessComponent from './components/StatelessComponent.jsx';
import UserInfo from './components/UserInfo';
import style from './main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: 0,
      userInfo: {},
      shippingInfo: {},
      creditInfo: {}
    };
  }

  getUserInfo(info) {
    // alert(info)
    // console.log(info)
    // let count = this.state.pageCount;
    // count++;
    this.setState({
      // pageCount: count,
      userInfo: info
    });
  }
  

  render () {
    // if (this.state.pageCount === 0) {
      return (
        <div>
          <UserInfo getUserInfo={this.getUserInfo.bind(this)}/>
        </div>
      )
    // }
  }
}

render(<App/>, document.getElementById('app'));






// return (
//   <div>
//     <h1> Up and running! </h1>
//     {/* Likes : <span>{this.state.likesCount}</span> */}
//     {/* <StatelessComponent onLike={this.onLike.bind(this)} /> */}
//     {/* <StatefulComponent onLike={this.onLike.bind(this)}/> */}
//   </div>
// )