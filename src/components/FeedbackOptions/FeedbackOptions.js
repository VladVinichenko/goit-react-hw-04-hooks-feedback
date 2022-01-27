import { Fragment } from "react/cjs/react.production.min"
import s from './FeedbackOptions.module.css'
import Button from "../Button/Button";
import PropTypes from "prop-types"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options)
  return (
    <Fragment>
      <div className={s.buttonBox}>
        {keys.map(key =>
          <button className={s.button} onClick={() => onLeaveFeedback(key)} key={key}>{key}</button >
        )}
      </div>
    </Fragment>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired
}


export default FeedbackOptions