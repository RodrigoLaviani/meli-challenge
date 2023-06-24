import './SearchResult.scss';
import Item from '../item/Item';

const SearchResult = ({ items }) => {
  return (
      <>
        {/* {
          items.map((item, index) => 
            <Item 
              key={`item-${index}`}
              image={item.image}
              price={item.price}
              title={item.title}
              location={item.location}
            ></Item>
          )
        } */}
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </>
  );
};

export default SearchResult;
