import Styles from './Result.module.css'
import ReactConfetti from 'react-confetti'

export default function Result({ maxQuizLen, correctNumLen }) {
  return (
    <>
      <div className={Styles.result}>
        <span className={Styles.resultHighRight}>{`全${maxQuizLen}問中、${correctNumLen}問正解でした！`}</span>
      </div>
      <ReactConfetti/>
    </>
  )
}
