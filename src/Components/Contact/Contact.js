import React from 'react';
import './Contact.css';

export class Contact extends React.Component {

  render() {
    return (
      <div className="Contact">
        <p onClick={this.props.revealGallery} className="clickable">&larr;</p>
        <br/>
        <p>nicoleclarefraser@gmail.com</p>
        <p>+27 (0) 82 307 1168</p>
      </div>
    )
  }
}