// Write your code here.
import './index.css'

const FaqItem = props => {
  const {id, questionText, answerText, isAnswerVisible} = props.item
  const {toggleFaqAnswer} = props
  // console.log(isAnswerVisible)
  const btnAltValue = isAnswerVisible ? 'minus' : 'plus'

  const onClickBtn = () => {
    toggleFaqAnswer(id)
  }
  return (
    <li>
      <div className="faq-question-row">
        <h1 className="faq-question">{questionText}</h1>
        <button onClick={onClickBtn}>
          <img
            src={
              isAnswerVisible
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={btnAltValue}
          />
        </button>
      </div>
      {isAnswerVisible && <hr />}
      {isAnswerVisible && <p className="answer">{answerText}</p>}
    </li>
  )
}
export default FaqItem
