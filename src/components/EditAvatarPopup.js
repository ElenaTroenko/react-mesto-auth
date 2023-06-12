import React from "react";
import PopupWithForm from "./PopupWithForm";
import { LoadingContext } from "../contexts/LoadingContext";

export default function EditAvatarPopup(props) {

  // подписка на контекст LoadingContext
  const isLoading = React.useContext(LoadingContext);

  // Реф
  const avatarRef = React.useRef();

  // Хэндлер сабмита формы
  function handleSubmit(e) {
    e.preventDefault();  // не перегружать страницу
    
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (

    <PopupWithForm
      name="update_avatar"
      title="Обновить аватар"
      containerClassList="popup__container popup__container_type_avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      buttonText={isLoading ? 'Сохранение...' : 'Сохранить'}
      onSubmit={handleSubmit}
    >
      <input ref={avatarRef} id="input-avatar-url" className="popup-form__input popup-form__input_avatar_link " type="url"
        name="avatarlink" placeholder="Ссылка на аватар" required />
      <span className="popup-form__input-error input-avatar-url-error">Введите адрес сслыка на аватар.</span>
    </PopupWithForm>

  )
}