import './SearchResult.scss';
import React from 'react';
import { useNavigate } from "react-router-dom";
import Item from '../item/Item';
import formatPrice from '../../shared/helper/priceHelper';

const SearchResult = ({ items }) => {
  const navigate = useNavigate();

  const handlerClick = (itemId) => {
    navigate(`/items/${itemId}`);
  }

  return (
      <>
        {
          items.map((item, index) => 
            <div
              key={`item-${index}`}
              onClick={() => handlerClick(item.id)}>
              <Item
                image={item.picture}
                price={formatPrice(item.price)}
                title={item.title}
                location={item.location}
                shipping={item.free_shipping}
              ></Item>
            </div>
          )
        }
      </>
  );
};

export default SearchResult;
