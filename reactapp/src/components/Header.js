import React, { Component } from 'react'
import { Link } from "react-router-dom";


export class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
            <div className="row">
                <div className="col-lg-2 left">
                    <Link to='/'>React.az</Link>
                </div>
                <div className="col-lg-10 text-end">
                    <Link to='/'>Home</Link>
                    <Link to='/users'>Users</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
            </div>
        </div>
      </header>
    )
  }
}

export default Header