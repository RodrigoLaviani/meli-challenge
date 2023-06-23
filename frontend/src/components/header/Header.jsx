import './Header.scss';
import logo from './../../assets/Logo_ML.png';
import searchIcon from './../../assets/ic_Search.png';
import { useState } from 'react';

const Header = ({ search }) => {
  const [value, setValue] = useState('')

  const handlerClick = () => {
    console.log(value);
  }

  return (
    <header className="container-header">
      <section className='header'>
        <img src={logo} alt={'Logo de Mercado Libre'}></img>
        <div className='input-container'>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Nunca dejes de buscar"
            className="input"
          />
          <div className='search-icon-container'>
            <img 
              src={searchIcon} 
              alt={'Ícono de búsqueda'} 
              onClick={() => handlerClick()}
              className="search-icon"
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
