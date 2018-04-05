import React from 'react';
import style from './../main.css';

class ShippingInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let field = event.target.id
    if (field === 'line1') {
      this.setState({
        line1: event.target.value
      });
    } else if (field === 'line2') {
      this.setState({
        line2: event.target.value
      });
    } else if (field === 'city') {
      this.setState({
        city: event.target.value
      });
    } else if (field === 'state') {
        this.setState({
          state: event.target.value
        });
      } else if (field === 'zip') {
        this.setState({
          zip: event.target.value
        });
      } else if (field === 'phone') {
        this.setState({
          phone: event.target.value
        });
      }
  }

  passUpShippingInfo() {
    let shippingInfo = {
      line1: this.state.line1,
      line2: this.state.line2,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      email: this.state.email,
      phone: this.state.phone
    }
    this.props.getShippingInfo(shippingInfo);
  }

  render() {
    return (
      <div>
        <form >
          <div>
            <label>
              Line1:
              <input id='line1' type="text" value={this.state.line1} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              Line2:
              <input id='line2' type="text" value={this.state.line2} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              City:
              <input id='city' type="text" value={this.state.city} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              State:
              <input id='state' type="text" value={this.state.state} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              Zip:
              <input id='zip' type="text" value={this.state.zip} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              Phone:
              <input id='phone' type="text" value={this.state.phone} onChange={this.handleChange} />
            </label>
          </div>
        </form>
        <button onClick={this.props.back}> Back </button>
        <button onClick={this.passUpShippingInfo.bind(this)}>NEXT</button>
      </div>
    );
  }
}

export default ShippingInfo;