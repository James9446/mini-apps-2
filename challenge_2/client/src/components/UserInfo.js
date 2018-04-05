import React from 'react';
import style from './../main.css';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    // this.props.onSubmit = this.props.onSubmit.bind(this);
  }

  // handleChange(event) {
  //   let field = event.target.id
  //   this.props.onSubmit(event.target.value);
  // }

  handleChange(event) {
    let field = event.target.id
    if (field === 'name') {
      this.setState({
        name: event.target.value
      });
    } else if (field === 'email') {
      this.setState({
        email: event.target.value
      });
    } else if (field === 'password') {
      this.setState({
        password: event.target.value
      });
    }
  }

  passUpUserInfo() {
    let userInfo = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    // console.log('sentence')
    this.props.getUserInfo(userInfo);
  }

  render() {
    return (
      <div>
      <form >
        <div>
          <label>
            Name:
            <input id='name' type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input id='email' type="text" value={this.state.email} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input id='password' type="text" value={this.state.password} onChange={this.handleChange} />
          </label>
        </div>
        
        {/* <input type="submit" value="Next" /> */}
      </form>
      <button onClick={this.passUpUserInfo.bind(this)}>NEXT</button>
      </div>
    );
  }
}

export default UserInfo;