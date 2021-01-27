import React from 'react';
import './Menu.css';

export class Menu extends React.Component {

  displayOptions() {
    if (this.props.selected === "gallery") {
      return (
        <div className="MenuBar">
          <p onClick={this.props.revealAQuietPlace}>a quiet place</p>
          <p onClick={this.props.revealUntitled}>untitled (façade)</p>
        </div>
      )
    } else if (this.props.selected === "aqp") {
      return (
        <div className="MenuBar">
          <p onClick={this.props.revealAQuietPlace} className="underlined">a quiet place</p>
          <p onClick={this.props.revealUntitled}>untitled (façade)</p>
        </div>
      )
    } else if (this.props.selected === "uf") {
      return (
        <div className="MenuBar">
          <p onClick={this.props.revealAQuietPlace}>a quiet place</p>
          <p onClick={this.props.revealUntitled} className="underlined">untitled (façade)</p>
        </div>
      )
    }
  }

  render() {
    return (
      this.displayOptions()
    )
  }
}