// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onClickOfAmount = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="bg-container">
        <div className="denominations-container">
          <div className="person-container">
            <h1 className="person-logo">S</h1>
            <p className="person-name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-para">Your balance</p>
            <div className="amount-container">
              <p className="amount">{amount}</p>
              <p className="amount-para">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-heading">Withdraw</p>
          <p className="choose-sum-para">CHOOSE SUM (IN RUPEES)</p>
          <div className="items-container">
            <ul className="value-buttons">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  itemDetails={eachItem}
                  key={eachItem.id}
                  onClickOfAmount={this.onClickOfAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
