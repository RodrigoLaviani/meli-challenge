import React from 'react';
import { shallow } from 'enzyme';
import Item from '../../src/components/item/Item';

describe('Item', () => {
  it('renders correctly', () => {
    const image = 'image-url';
    const price = '$10';
    const title = 'Test Item';
    const location = 'Test Location';
    const shipping = true;

    const wrapper = shallow(
      <Item
        image={image}
        price={price}
        title={title}
        location={location}
        shipping={shipping}
      />
    );

    expect(wrapper.find('.item-container').exists()).toBe(true);
    expect(wrapper.find('.item-image').prop('src')).toEqual(image);
    expect(wrapper.find('.item-price').text()).toEqual(`${price} `);
    expect(wrapper.find('.item-description').text()).toEqual(title);
    expect(wrapper.find('.item-location').text()).toEqual(location);
    expect(wrapper.find('.item-price img').prop('alt')).toEqual('Shipping');
  });
});
