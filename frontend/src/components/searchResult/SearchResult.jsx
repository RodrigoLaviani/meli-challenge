import './SearchResult.scss';
import Item from '../item/Item';

const SearchResult = ({ items }) => {
  const handlerClick = (itemId) => {
    // window.history.replaceState({}, '', `/items/${itemId}`);
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
