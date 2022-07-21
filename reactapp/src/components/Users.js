import React, { Component } from 'react'

class Users extends Component {
  render() {
    const {id,username ,age} = this.props
    return (
      <ul>
        <li>ID: {id}</li>
        <li>Ad: {username}</li>
        <li>Yas: {age}</li>
      </ul>
    )
  }
}

export default Users