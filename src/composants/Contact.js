import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="card card-body mb-3">
        <h4>{this.props.name}</h4>

        <ul className='card card-body mb-3'>
          <li className="list-group-item">
            email:{this.props.email}
          </li>
          <li className="list-group-item">
             phone:{this.props.phone}
          </li>
        </ul>
        
      </div>
    )
  }
}
