// Write your code here
import './index.css'

const DenominationItem = props => {
  const {itemDetails, onClickOfAmount} = props
  const {value} = itemDetails

  const onIncrease = () => {
    onClickOfAmount(value)
  }
  return (
    <li className="list-item">
      <button type="button" onClick={onIncrease} className="button1">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
