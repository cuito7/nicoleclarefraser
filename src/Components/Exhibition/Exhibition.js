import React from 'react';
import './Exhibition.css';
import {exhibitions} from '../../Media/Media';

export class Exhibition extends React.Component {

  displayExhibition() {
    let exhibition;

    if (this.props.exhibition==="aqp") {
      exhibition = exhibitions.aqp;
    } else {
      exhibition = exhibitions.uf;
    }

    return (
      <div className="Exhibition">
        <div className="text">
          <h1>{exhibition.title}</h1>
          <h4>{exhibition.subtitle1}</h4>
          {
            exhibition.body.map(paragraph => {
              return <p>{paragraph}</p>
            })
          }
        </div>
        <br/>
        <a href="#images"><p>&darr;</p></a>
        <div className="images" id="images">
        {
          exhibition.images.map(image => {
            return (
              <div className="imageContainer">
                <img src={image.image} alt="Untitled"></img>
                <div className="imageInfoContainer">
                  <p>{image.title}</p>
                  <p>{image.year}</p>
                  <p>{image.method}</p>
                  <p>{image.detail}</p>
                  <p>{image.dimension}</p>
                </div>
              </div>
            )
          })
        }
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }

  render() {
    return (
      this.displayExhibition()
    )
  }
}