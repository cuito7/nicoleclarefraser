import React from 'react';
import './Gallery.css';
import {random} from '../../Media/Media';

export class Gallery extends React.Component {

  returnImage() {
    return random[Math.round(Math.random()*3)]
  }

  render() {
    return (
      <div className="Gallery">
        <div>
          <img src={this.returnImage()} alt="A Quiet Place 1"></img>
        </div>
      </div>
    )
  }
}