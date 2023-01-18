import React from 'react';

function Card({ dish, inStock }) {

  const [isSelected,   setSelected    ] = React.useState(false);
  const [overheadText, setOverheadText] = React.useState('Сказочное заморское яство');
  const [isMouseOver,  setMouseOver   ] = React.useState(false);

  function handleCardClick() {
    if (isSelected) setMouseOver(false);
    if (inStock) setSelected(!isSelected);
  }

  function handleMouseEnter() {
    if (isSelected) {
      setMouseOver(true);
    } else {
      setMouseOver(false);
    }
  }

  function handleMouseLeave() {
    setMouseOver(false);
  }

  React.useEffect(() => {
    if (isSelected && isMouseOver) {
      setOverheadText('Котэ не одобряет?');
    } else {
      setOverheadText('Сказочное заморское яство');
    }
  }, [isMouseOver, isSelected])

  return (
    <article className="card">
      <div className={`card__content ${!inStock && 
                      'card__content_type_disabled'} ${isSelected && 
                      'card__content_type_selected'} ${isSelected && isMouseOver &&
                      'card__content_type_selected-hover'}`}
           onClick={handleCardClick}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>
        
        { isSelected && <p className={`card__overhead ${!inStock && 
                                      'card__overhead_type_disabled'}
                                       card__overhead_type_selected`}>{overheadText}</p>
        }

        { !isSelected && <p className={`card__overhead ${!inStock && 
                                       'card__overhead_type_disabled'}`}>{overheadText}</p>
        }

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
                        'card__weight_type_disabled'} ${isSelected && 
                        'card__weight_type_selected'}`}>

          <p className="card__weight-value">{dish.weight}</p> 
          <p className="card__weight-unit">кг</p>
          
        </div>

        <div className={`card__image ${!inStock && 
                        'card__image_disabled'}`}></div>

      </div>

      { inStock && !isSelected && <p className="card__caption">Чего сидишь? Порадуй котэ,&ensp;
                    <button className="card__caption-link" 
                            type='button'
                            onClick={handleCardClick}>купи.</button>
                  </p>
      }

      { inStock && isSelected && <p className="card__caption">{dish.description}</p>
      }

      { !inStock && <p className={`card__caption card__caption_disabled`}>
                      {`Печалька, ${dish.withWhat} закончился.`}
                   </p>
      } 
    </article>
  )
}

export default Card