import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import propTypes from "prop-types";



function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementFeedback = typeFeedback => {
    typeFeedback === 'good' && setGood(good + 1)
    typeFeedback === 'neutral' && setNeutral(neutral + 1)
    typeFeedback === 'bad' && setBad(bad + 1)
  }

  const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round([good / countTotalFeedback() * 100])
  }

  return (
    <Fragment>
      <Section title='Statistics'>
        <FeedbackOptions options={{ good: good, neutral: neutral, bad: bad }} onLeaveFeedback={incrementFeedback} />
      </Section>
      <Section title='Please leave feedback'>
        <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}></Statistics>
      </Section>
    </Fragment>
  )
}

App.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
}

export default App