import './ItemDetail.scss';
import image from './../../shared/assets/Logo_ML.png';

const ItemDetail = ({ item }) => {
  return (
    <article className='detail-container'>
        <section className='detail-section'>
            <img src={image} alt={'Imagen del producto'} className='detail-image'></img>
            <span className='detail-title'>Descripción del producto</span>
            <p className='detail-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, non vel. Possimus consectetur consequuntur molestiae facere ipsam eaque nobis iste necessitatibus accusamus quae, laboriosam aliquam quam velit dicta atque voluptas.</p>
        </section>
        <section className='sell-section'>
            <div className='sell-box'>
                <label className='sell-count'>Nuevo - 234 vendidos</label>
                <span className='sell-title'>Deco Reverse Sombrero Oxford</span>
                <span className='sell-price'>$ 1.980</span>
                <button className='sell-button'>Comprar</button>
            </div>
        </section>
    </article>
  );
};

export default ItemDetail;
