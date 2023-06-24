import './Item.scss';
import image2 from './../../shared/assets/Logo_ML.png';
import shippingImg from './../../shared/assets/ic_shipping.png';

const Item = ({ image, price, title, location }) => {
    return(
        <article className='item-container'>
            <img src={image2} alt="Imagen" className='item-image'></img>
            <div className='item-data'>
                <span className='item-price'>$ 1.980 <img src={shippingImg} alt='Shipping'></img></span>
                <span className='item-description'>Apple Ipod Touch 5g 16gb Negro Igual A Nuevo
                    Completo Unico!</span>
            </div>
            <label className='item-location'>Capital Federal</label>
        </article>
    )
}

export default Item;