import React from 'react';
import './InfoBar.css';

export class InfoBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayInfoBar() {
    if (this.props.bioShown) {
      return (
        <div className="InfoBar">
          <span onClick={this.props.revealGallery}><p id="long"><strong>Nicole Clare Fraser</strong></p><p id="short"><strong>NCF</strong></p></span>
          <p onClick={this.props.revealBio} className="underlined">Bio</p>
          <p onClick={this.props.revealContact}>Contact</p>
        </div>
      )
    } else if (this.props.contactShown) {
      return (
        <div className="InfoBar">
          <span onClick={this.props.revealGallery}><p id="long"><strong>Nicole Clare Fraser</strong></p><p id="short"><strong>NCF</strong></p></span>
          <p onClick={this.props.revealBio}>Bio</p>
          <p onClick={this.props.revealContact} className="underlined">Contact</p>
        </div>
      )
    } else {
      return (
        <div className="InfoBar">
          <span onClick={this.props.revealGallery}><p id="long"><strong>Nicole Clare Fraser</strong></p><p id="short"><strong>NCF</strong></p></span>
          <p onClick={this.props.revealBio}>Bio</p>
          <p onClick={this.props.revealContact}>Contact</p>
        </div>
      )
    }
  }

  render() {
    return (
      this.displayInfoBar()
    )
  }
}