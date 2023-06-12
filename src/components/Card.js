import React from "react";
import { UserContext } from '../contexts/CurrentUserContext.js'


export default function Card(props) {

  // подписка на контекст UserContext
  const currentUser = React.useContext(UserContext);

  // булево "Владелец" или нет
  const isOwn = props.card.owner._id === currentUser._id;
  // Булево "Лайкнуто Владельцем"
  const isOwnLiked = props.card.likes.some(user => user._id === currentUser._id);
  // ClassName для сердечка карточки: контур или залитое
  const buttonHeartClassName = `foto-card__button-heart${isOwnLiked ? ' foto-card__button-heart_active' : ''}`;

  // хэндлер клика покарточке
  function handleClick() {
    props.onCardClick(props.card);
  } 

  // хэндлер лайка
  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  // хэндлер удаления карточки
  function handleDeleteClick() {
    props.onCardDelete(props.card)
  }
  
  return (
    <article className="foto-card__item" id={props.card._id}>
      {isOwn && <button onClick={handleDeleteClick} className="foto-card__basket" type="button"></button>}
      <img onClick={handleClick} className="foto-card__img" src={props.card.link} alt={props.card.name} />
      <div className="foto-card__location">
        <h2 className="foto-card__title">{props.card.name}</h2>
        
        <div className={buttonHeartClassName}>
          <button onClick={handleLikeClick} className="foto-card__button-heart" type="button"></button>
          <div className="foto-card__counter">{props.card.likes.length}</div>
        </div>

      </div>
    </article>
  )

}