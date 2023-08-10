// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {clicked: false}

  onClickChange = () => {
    this.setState(prevState => ({clicked: !prevState.clicked}))
  }

  render() {
    const {clicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    let authdiv
    console.log(clicked)
    // eslint-disable-next-line
    if (clicked === false) {
      authdiv = (
        <div className="text-con">
          <h1 className="head">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emoji-con">
            {emojis.map(each => (
              <li className="emoji-con">
                <button
                  className="butt"
                  onClick={this.onClickChange}
                  type="button"
                >
                  <img
                    src={each.imageUrl}
                    alt={each.name}
                    className="emoji"
                    key={each.id}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )
    } else {
      authdiv = (
        <div className="text-con">
          <img src={loveEmojiUrl} alt="love emoji" className="emojil" />
          <h1 className="head">Thank You!</h1>
          <p className="para">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      )
    }

    return <div className="bg-con">{authdiv}</div>
  }
}

export default Feedback
