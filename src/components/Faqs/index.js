// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {
    faqsList: this.props.faqsList.map(item => ({
      ...item,
      isAnswerVisible: false,
    })),
  }

  toggleFaqAnswer = faqId => {
    this.setState(prevState => {
      const {faqsList} = prevState
      const updatedList = faqsList.map(item => {
        if (item.id === faqId) {
          return {...item, isAnswerVisible: !item.isAnswerVisible}
        }
        return item
      })
      // console.log(updatedList)
      return {
        faqsList: updatedList,
      }
    })
  }

  render() {
    const {faqsList} = this.state
    // console.log(faqsList)
    return (
      <div className="main-container">
        <div className="faq-card">
          <h1 className="faq-heading">FAQs</h1>
          <ul className="faqs-container">
            {faqsList.map(item => (
              <FaqItem
                key={item.id}
                item={item}
                toggleFaqAnswer={this.toggleFaqAnswer}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
