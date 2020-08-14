import React, { Component } from 'react'

class AddTotal extends Component {
  constructor() {
    super()
    this.state = { num: '', total: 0 }
  }


  addTotal = (e) => {
    e.preventDefault()
    let { num, total } = this.state;
    this.setState({ num: '', total: num + total })
  }
  render() {
    return <div>
      <input type="text" value={this.state.num} onChange={e => {
        if (Number.isInteger(parseInt(e.target.value))) this.setState({
          num: parseInt(e.target.value)
        })
      }}
      />
      <p>{this.state.total}</p>
      <button onClick={this.addTotal} className="redText">
        +
      </button>
    </div>
  }
}

export default AddTotal;