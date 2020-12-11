import React, { Component } from 'react'
import Contact from './Contact'

export default class List extends Component {
  state = {
    contacts : [
      {
        id:1 ,
        name : 'John Doe' ,
        email : 'johndo@gmail.com',
        phone : '555-55-555',
      },
      {
        id:2,
        name : 'Janne Doe' ,
        email : 'janne@gmail.com',
        phone : '666-55-555',
      },
      { 
        id:3,
        name : 'Remi Doe' ,
        email : 'Remi@gmail.com',
        phone : '888-55-555',
      }
    ]

  }
  render() {
    return (
      <div>
       {this.state.contacts.map(contact =>(
         < Contact
          key   = {contact.id }
          name  = {contact.name}
          email = {contact.email}
          phone = {contact.phone}
         />
       ))} 
      </div>
    )
  }
}
