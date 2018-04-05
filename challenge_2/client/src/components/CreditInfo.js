import React from 'react';
import style from './../main.css';

class CreditInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: '',
      exp: '',
      cvv: '',
      billing: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let field = event.target.id
    if (field === 'card') {
      this.setState({
        card: event.target.value
      });
    } else if (field === 'exp') {
      this.setState({
        exp: event.target.value
      });
    } else if (field === 'cvv') {
      this.setState({
        cvv: event.target.value
      });
    } else if (field === 'billing') {
      this.setState({
        billing: event.target.value
      });
    }
  }

  passUpCreditInfo() {
    let creditInfo = {
      card: this.state.card,
      exp: this.state.exp,
      cvv: this.state.cvv,
      billing: this.state.billing
    }
    this.props.getCreditInfo(creditInfo);
  }

  render() {
    return (
      <div>
        <form >
          <div>
            <label>
              Credit card number:
              <input id='card' type="text" value={this.state.card} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              Expiration Date:
              <input id='exp' type="text" value={this.state.exp} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              CVV:
              <input id='cvv' type="text" value={this.state.cvv} onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label>
              billing:
              <input id='billing' type="text" value={this.state.billing} onChange={this.handleChange} />
            </label>
          </div>
        </form>
        <button onClick={this.props.back}> Back </button>
        <button onClick={this.passUpCreditInfo.bind(this)}>PURCHASE</button>
      </div>
    );
  }
}

export default CreditInfo;