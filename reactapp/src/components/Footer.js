import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
     <footer>
        <h1>Copyright {new Date().getFullYear()}</h1>
     </footer>
    )
  }
}

export default Footer