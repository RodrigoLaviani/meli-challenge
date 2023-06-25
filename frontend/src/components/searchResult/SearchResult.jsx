import './SearchResult.scss';
import { useNavigate } from "react-router-dom";
import Item from '../item/Item';

const SearchResult = ({ items }) => {
  const navigate = useNavigate();

  const handlerClick = (itemId) => {
    navigate(`/items/${itemId}`);
  }

  return (
      <>
        {
          items.map((item, index) => 
            <acticle
              key={`item-${index}`}
              onClick={() => handlerClick(item.id)}>
              <Item
                image={item.picture}
                price={item.price.amount}
                title={item.title}
                location={item.location}
                shipping={item.free_shipping}
              ></Item>
            </acticle>
          )
        }
      </>
  );
};

export default SearchResult;
