import React from "react";
import usePopupClose from '../hooks/usePopupClose';


export default function PopupWithForm (props) {

  // вызов хука
  usePopupClose(props.isOpen, props.onClose);

  return (
    <section className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className={props.containerClassList}>
        {props.title && <h2 className="popup__title">{props.title}</h2>}
        <button onClick={props.onClose ? props.onClose : undefined} className="popup__btn-close" type="button" aria-label="Закрыть"></button>
        <form className="popup-form" name={props.name} onSubmit={props.onSubmit}>
          {props.children}
          {props.buttonText && <button className="popup-form__btn" type="submit">{props.buttonText}</button>}
        </form>
      </div>
    </section>
  );
  
}