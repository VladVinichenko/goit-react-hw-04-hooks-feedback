import s from './Button.module.css'
import PropTypes from "prop-types"

const Button = ({ name, onLeaveFeedback }) => {
  return (
    <button className={s.button} name={name} onClick={() => onLeaveFeedback(name)}> {name}</button >
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired
}

export default Button;
