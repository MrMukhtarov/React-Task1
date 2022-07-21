import React, { Component } from 'react'
import Users from './Users'

 class UserList extends Component {
  render() {
    const {userlist} = this.props
    return (
      <div className="container">
        {
            userlist.map(x => {
                return(
                    <Users 
                    key={x.id}
                    id={x.id}
                    username={x.username}
                    age={x.Age}
                    />
                )
            })
        }
        
      </div>
    )
  }
}

export default UserList