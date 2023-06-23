import logo from './../../assets/Logo_ML.png';

const ItemDetail = ({ value, onChange }) => {
  return (
    <header className="header">
      <img src={logo} alt={'Logo de Mercado Libre'}></img>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Buscar..."
        className="search-input"
      />
    </header>
  );
};

export default ItemDetail;
