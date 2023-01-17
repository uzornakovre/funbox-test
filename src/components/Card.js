import React from 'react';
// import dishData from '../utils/dishData';

function Card({ dish, inStock, selectCard, selectedCards }) {

  const [isSelected, setSelected] = React.useState(false);

  function handleCardClick() {
    if (inStock) {
      // selectCard(dish);
      setSelected(!isSelected);
    }
  }

  return (
    <article className="card">
      <div className={`card__content ${!inStock && 
                      'card__content_disabled'} ${isSelected && 
                      'card__content_selected'}`}
           onClick={handleCardClick}>

        <p className={`card__overhead ${!inStock && 
                      'card__overhead_disabled'} ${isSelected && 
                      'card__overhead_selected'}`}>Сказочное заморское яство</p>

        <h2 className={`card__title ${!inStock && 
                      'card__title_disabled'}`}>Нямушка</h2>

        <p className={`card__subtitle ${!inStock && 
                      'card__subtitle_disabled'}`}>{dish.withWhat}</p>

        <p className={`card__description ${!inStock &&
                      'card__description_disabled'}`}>
          <span className="bold">{dish.portions} </span>порций</p>

        <p className={`card__description ${!inStock &&
                      'card__description_disabled'}`}>{`${dish.gifts} ${dish.typeOfGift} в подарок`}</p>

        { dish.satisfied && <p className={`card__description ${!inStock &&
                                         'card__description_disabled'}`}>заказчик доволен</p> }

        <div className={`card__weight ${!inStock && 
                        'card__weight_disabled'} ${isSelected && 
                        'card__weight_selected'}`}>

          <p className="card__weight-value">{dish.weight}</p> 
          <p className="card__weight-unit">кг</p>
          
        </div>

        <div className={`card__image ${!inStock && 
                        'card__image_disabled'}`}></div>

      </div>
      {inStock && <p className="card__caption">Чего сидишь? Порадуй котэ,&ensp;
                    <button className="card__caption-link" type='button'>купи.</button>
                  </p>
      }
      {!inStock && <p className={`card__caption card__caption_disabled`}>
                      {`Печалька, ${dish.withWhat} закончился.`}
                   </p>
      } 
    </article>
  )
}

export default Card