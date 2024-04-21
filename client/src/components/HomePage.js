import React from 'react'
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div className="HomePage">
      <h1>Тут будет ввод</h1>
      <Link to="/second-page">
        <button>Добавить в бд</button>
      </Link>
    </div>
  );
}

export default HomePage
