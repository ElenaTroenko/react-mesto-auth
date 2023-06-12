import React from 'react';
import PopupWithForm from './PopupWithForm';
import '../components/style/InfoToolTip.css';




const InfoTooltip = (props) => {

  return (
    
    <PopupWithForm
      name="infoTooltip"
      containerClassList="popup__container"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >

      <img className="image-error" src={props.img} />
      <h2 className="info-message"><font color='black'>{props.msg}</font></h2>

    </PopupWithForm>
  )
}

export default InfoTooltip;