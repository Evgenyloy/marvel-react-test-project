import { useEffect, useState } from 'react';
import './appHeader.scss';
import { Link, NavLink } from 'react-router-dom';

const AppHeader = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    fn().then(onDataLoading);
  }, []);

  const fn = async () => {
    const a = await fetch('https://6yps3h-8080.csb.app/posts');
    let data = await a.json();
    return await data[0].title;
  };

  const onDataLoading = (data) => {
    setText(data);
    console.log(data);
  };

  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="/">
          <span>Marvel{text}</span> information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink exact activeStyle={{ color: '#9f0013' }} to="/">
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink activeStyle={{ color: '#9f0013' }} to="/comics">
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
