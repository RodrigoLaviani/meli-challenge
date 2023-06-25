import './ItemDetail.scss';
import { useMatch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import client from '../../shared/services/client';
import formatPrice from '../../shared/helper/priceHelper';

const ItemDetail = () => {
  const { params } = useMatch('/items/:id');
  const [item, setItem] = useState(null)

  useEffect(() => {
    (async () => {
      setItem(await searchItemDetail(params.id));
    })()
  }, [params])

  const searchItemDetail = async (id) => {
    const { data } = await client.get(`items/${id}`);
    return data.item;
  }

  if (!item) {
    return <></>
  }

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
                <span className={"sell-price"}>
                  {formatPrice(item.price)}
                  {item.price.decimals ? (
                    <span className={"sell-price-decimals"}>
                      {item.price.decimals === 0 ? '00' : item.price.decimals}
                    </span>
                  ) : null}
                </span>
                <button className='sell-button'>Comprar</button>
            </div>
        </section>
    </article>
  );
};

export default ItemDetail;
