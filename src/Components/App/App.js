import React from 'react';
import './App.css';
import {Menu} from '../Menu/Menu';
import {InfoBar} from '../InfoBar/InfoBar';
import {Gallery} from '../Gallery/Gallery';
import {Bio} from '../Bio/Bio';
import {Contact} from '../Contact/Contact';
import {Exhibition} from '../Exhibition/Exhibition';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      galleryShown: true,
      bioShown: false,
      contactShown: false,
      aQuietPlace: false,
      untitled: false
    };
    this.revealGallery = this.revealGallery.bind(this);
    this.revealBio = this.revealBio.bind(this);
    this.revealContact = this.revealContact.bind(this);
    this.revealAQuietPlace = this.revealAQuietPlace.bind(this);
    this.revealUntitled = this.revealUntitled.bind(this);
  }

  revealGallery() {
    this.setState({
      galleryShown: true,
      bioShown: false,
      contactShown: false,
      aQuietPlace: false,
      untitled: false
    });
  }

  revealBio() {
    this.setState({
      galleryShown: false,
      bioShown: true,
      contactShown: false,
      aQuietPlace: false,
      untitled: false
    });
  }

  revealContact() {
    this.setState({
      galleryShown: false,
      bioShown: false,
      contactShown: true,
      aQuietPlace: false,
      untitled: false
    });
  }

  revealAQuietPlace() {
    this.setState({
      galleryShown: false,
      bioShown: false,
      contactShown: false,
      aQuietPlace: true,
      untitled: false
    });
  }

  revealUntitled() {
    this.setState({
      galleryShown: false,
      bioShown: false,
      contactShown: false,
      aQuietPlace: false,
      untitled: true
    });
  }

  renderBody() {
    if (this.state.galleryShown) {
      return <Gallery />;
    } else if (this.state.bioShown) {
      return <Bio revealGallery={this.revealGallery}/>
    } else if (this.state.contactShown) {
      return <Contact revealGallery={this.revealGallery}/>
    } else if (this.state.aQuietPlace) {
      return <Exhibition exhibition="aqp"/>
    } else if (this.state.untitled) {
      return <Exhibition exhibition="uf"/>
    }
  }

  renderMenu() {
    if (this.state.bioShown || this.state.contactShown) {
      return null;
    } else {
      if (this.state.aQuietPlace) {
        return <Menu revealAQuietPlace={this.revealAQuietPlace} revealUntitled={this.revealUntitled} selected="aqp"/>
      } else if (this.state.untitled) {
        return <Menu revealAQuietPlace={this.revealAQuietPlace} revealUntitled={this.revealUntitled} selected="uf"/>
      } else if (this.state.galleryShown) {
        return <Menu revealAQuietPlace={this.revealAQuietPlace} revealUntitled={this.revealUntitled} selected="gallery"/>
      }
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.renderMenu()
        }
        {
          this.renderBody()
        }
        <InfoBar revealBio={this.revealBio} 
                  revealContact={this.revealContact} 
                  revealGallery={this.revealGallery} 
                  bioShown={this.state.bioShown}
                  contactShown={this.state.contactShown}/>
      </div>
    );
  }
}

export default App;
