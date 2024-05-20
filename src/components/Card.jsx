import React, { useState } from 'react';

function Card(props) {
  const {
    name,
    universe,
    alterego,
    occupation,
    friends,
    superpowers,
    url: img,
    info,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card">
      <div className="card-name">
        <h2>{name}</h2>
      </div>
      <div className="card-img">
        <img className="card-poster" src={img} alt="poster" />
      </div>
      <div className="card-content">
        <p>
          Вселенная: <span>{universe}</span>
        </p>
        <p>
          Альтерэго: <span>{alterego}</span>
        </p>
        <p>
          Род деятельности: <span>{occupation}</span>
        </p>
        <p>
          Друзья: <span>{friends}</span>
        </p>
        <p>
          Суперсилы: <span>{superpowers}</span>
        </p>
      </div>
      <div className="card-info">
        <button onClick={toggleInfo} className="card-info-btn">
          {isOpen ? 'Скрыть информацию' : 'Показать информацию'}
        </button>
        {isOpen && <p className="info">{info}</p>}
      </div>
    </div>
  );
}

export { Card };
