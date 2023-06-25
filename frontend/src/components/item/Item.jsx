import './Item.scss';
import shippingImg from './../../shared/assets/ic_shipping.png';

const Item = ({ image, price, title, location, shipping }) => {
    return(
        <article className='item-container'>
            <img src={image} alt="Imagen" className='item-image'></img>
            <div className='item-data'>
                <span className='item-price'>{price} {shipping && <img src={shippingImg} alt='Shipping'></img>}</span>
                <span className='item-description'>{title}</span>
            </div>
            <label className='item-location'>{location}</label>
        </article>
    )
}

export default Item;