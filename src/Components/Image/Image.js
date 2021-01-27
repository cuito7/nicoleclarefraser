import React from 'react';
import './Image.css';
import image from '../../Media/AQuietPlace/1.jpg';

export class Image extends React.Component {

  render() {
    return (
      <div className="ImageContainer">
        <img src={image} alt="Blobting"></img>
        <div className="ImageInfo">
          <p><strong>Blobting</strong></p>
          <p>2004</p>
          <p>26cm x 54cm</p>
        </div>
      </div>
    )
  }
}