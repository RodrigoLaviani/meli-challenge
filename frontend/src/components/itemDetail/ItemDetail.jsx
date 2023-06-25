import './ItemDetail.scss';
import { useLoaderData } from "react-router-dom";

const ItemDetail = () => {
  const item = useLoaderData();

  return (
    <article className='detail-container'>
        <section className='detail-section'>
            <img src={item.picture} alt={'Imagen del producto'} className='detail-image'></img>
            <span className='detail-title'>Descripción del producto</span>
            <p className='detail-description'>{item.description}</p>
        </section>
        <section className='sell-section'>
            <div className='sell-box'>
                <label className='sell-count'>{item.condition} - {item.sold_quantity} vendidos</label>
                <span className='sell-title'>{item.title}</span>
                <span className='sell-price'>$ {item.price.amount}</span>
                <button className='sell-button'>Comprar</button>
            </div>
        </section>
    </article>
  );
};

export default ItemDetail;
