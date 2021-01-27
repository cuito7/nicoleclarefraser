import React from 'react';
import './Bio.css';

export class Bio extends React.Component {

  render() {
    return (
      <div className="Bio">
        <p onClick={this.props.revealGallery} className="clickable">&larr;</p>
        <br/>
        <p>Born in South Africa, Cape Town in 1989, Nicole Clare Fraser studied at the Michaelis School of Fine Art, the University of Cape Town. She graduated in 2012 with a BA in Fine Art majoring in Photography.</p>
        <p>Nicole’s first introduction to the darkroom was during her 11th year at high school where she took art and photography as two of her school subjects. It was here that her intrigue and sensitivity toward the medium developed. Since school she continued with darkroom work at University and thereafter has completed Darkroom Photography and Hand Printing Workshops with the highly regarded and Master Black and White printer, Dennis Da Silva, in Johannesburg.</p>
        <p>In 2018 Nicole had her first solo exhibition, a quiet place, at the ORMS Cape Town School of Photography where she lecturers in Darkroom and Analogue Photography. In 2020, she held her second solo exhibition untitled (façade) at 99Loop Gallery in Cape Town.</p>
        <p>Currently, Nicole is doing her MFA and works as a teacher in wet darkroom techniques and printing at a tertiary institution in Cape Town. Her personal practice explores capturing spaces and places absent of people but clearly suggestive of the human presence.</p>
      </div>
    )
  }
}