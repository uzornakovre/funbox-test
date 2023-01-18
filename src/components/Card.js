import React from 'react';

function Card({ dish, inStock }) {

  const [isSelected,   setSelected]     = React.useState(false);
  const [overheadText, setOverheadText] = React.useState('Сказочное заморское яство');

  function handleCardClick() {
    if (inStock) {
      setSelected(!isSelected);
    }
  }

  // function handleMouseOut(evt) {
  //   if (isSelected) {
  //     setOverheadText('Котэ не одобряет?');
  //   } else {
  //     setOverheadText('Сказочное заморское яство');
  //   }
  // }

  // React.useState(() => {
  //   if (isSelected) {
  //     setOverheadText('Котэ не одобряет?');
  //   } else {
  //     setOverheadText('Сказочное заморское яство');
  //   }
  // }, [isSelected])

  return (
    <article className="card">
      <div className={`card__content ${!inStock && 
                      'card__content_disabled'} ${isSelected && 
                      'card__content_selected'}`}
           onClick={handleCardClick}
           onMouseOut={handleMouseOut}>
        
        { isSelected && <p className={`card__overhead ${!inStock && 
                                      'card__overhead_disabled'}
                                       card__overhead_selected`}>{overheadText}</p>
        }

        { !isSelected && <p className={`card__overhead ${!inStock && 
                                       'card__overhead_disabled'}`}>{overheadText}</p>
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
                        'card__weight_disabled'} ${isSelected && 
                        'card__weight_selected'}`}>

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