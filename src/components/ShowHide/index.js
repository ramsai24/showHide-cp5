// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {status1: false, status2: false}

  changeMode1 = () => {
    this.setState(preState => ({
      status1: !preState.status1,
    }))
  }

  changeMode2 = () => {
    this.setState(preState => ({
      status2: !preState.status2,
    }))
  }

  render() {
    const {status1, status2} = this.state
    return (
      <div className="bg-container">
        <h1>Show/Hide</h1>
        <div className="btns">
          <div>
            <div className="btn-container">
              <button type="button" onClick={this.changeMode1}>
                Show/Hide FirstName
              </button>
            </div>

            <p className="btn-container1">
              {status1 && <p className="name">Joe</p>}
              {!status1 && <p>{null} </p>}
            </p>
          </div>

          <div>
            <div className="btn-container">
              <button type="button" onClick={this.changeMode2}>
                Show/Hide LastName
              </button>
            </div>

            <p className="btn-container1">
              {status2 && <p className="name">Jonas</p>}
              {!status2 && <p> </p>}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
