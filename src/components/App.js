import React from "react";

function App() {
  return (
    <div className="page__content">
      <header className="header">
        <h1 className="header__title">Ты сегодня покормил кота?</h1>
      </header>
      <main className="cards">
        <ul className="cards__list">
          <li className="cards__list-item">
            <article className="card">
              <div className="card__content">
                <p className="card__overhead">Сказочное заморское яство</p>
                <h2 className="card__title">Нямушка</h2>
                <p className="card__subtitle">с фуа-гра</p>
                <p className="card__description"><span className="bold">10 </span>порций</p>
                <p className="card__description">мышь в подарок</p>
                <div className="card__weight">
                  <p className="card__weight-value">0,5</p>
                  <p className="card__weight-unit">кг</p>
                </div>
              </div>
              <p className="card__caption">Чего сидишь? Порадуй котэ,&ensp;
                <a className="card__caption-link" href="#" target="_blank">купи</a>.
              </p>
            </article>
          </li>
          <li className="cards__list-item">
            <article className="card">
              <div className="card__content">
                <p className="card__overhead">Сказочное заморское яство</p>
                <h2 className="card__title">Нямушка</h2>
                <p className="card__subtitle">с рыбой</p>
                <p className="card__description"><span className="bold">40 </span>порций</p>
                <p className="card__description"><span className="bold">2 </span>мыши в подарок</p>
                <div className="card__weight">
                  <p className="card__weight-value">2</p>
                  <p className="card__weight-unit">кг</p>
                </div>
              </div>
              <p className="card__caption">Чего сидишь? Порадуй котэ,&ensp;
                <a className="card__caption-link" href="#" target="_blank">купи</a>.
              </p>
            </article>
          </li>
            <article className="card">
              <div className="card__content">
                <p className="card__overhead">Сказочное заморское яство</p>
                <h2 className="card__title">Нямушка</h2>
                <p className="card__subtitle">с курой</p>
                <p className="card__description"><span className="bold">100 </span>порций</p>
                <p className="card__description"><span className="bold">5 </span> мышей в подарок</p>
                <p className="card__description">заказчик доволен</p>
                <div className="card__weight">
                  <p className="card__weight-value">5</p>
                  <p className="card__weight-unit">кг</p>
                </div>
                {/* <div className="card__corner">
                  kjhkjhkjh
                </div> */}
              </div>
              <p className="card__caption">Чего сидишь? Порадуй котэ,&ensp;
                <a className="card__caption-link" href="#" target="_blank">купи</a>.
              </p>
            </article>
          <li className="cards__list-item">

</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
