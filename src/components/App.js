import React    from 'react';
import Card     from './Card'
import dishData from '../utils/dishData';

function App() {

  return (
    <div className="page__content">
      <header className="header">
        <h1 className="header__title">Ты сегодня покормил кота?</h1>
      </header>
      <main className="cards">
        <ul className="cards__list">
          <li className="cards__list-item">
            <Card dish={dishData.foieGras}
                  inStock={true}
             />
          </li>
          <li className="cards__list-item">
            <Card dish={dishData.fish}
                  inStock={true}
            /> 
          </li>
          <li className="cards__list-item">
            <Card dish={dishData.chicken}
                  inStock={false}
            />
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
