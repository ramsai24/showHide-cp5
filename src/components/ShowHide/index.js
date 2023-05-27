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

            {status1 && <p className="name btn-container1">Joe</p>}
            {!status1 && <p> </p>}
          </div>

          <div>
            <div className="btn-container">
              <button type="button" onClick={this.changeMode2}>
                Show/Hide LastName
              </button>
            </div>

            {status2 && <p className="name btn-container1">Jonas</p>}
            {!status2 && <p> </p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
