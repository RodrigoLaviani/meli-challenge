import React from 'react';
import { shallow } from 'enzyme';
import Breadcrumbs from '../../src/components/breadcrumbs/Breadcrumbs';

jest.mock('../../src/shared/assets/chevron.svg', () => 'chevron.svg');

describe('Breadcrumbs', () => {
  const categories = ['Home', 'Category 1', 'Category 2'];

  it('should render correctly', () => {
    const wrapper = shallow(<Breadcrumbs categories={categories} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should display breadcrumbs correctly', () => {
    const wrapper = shallow(<Breadcrumbs categories={categories} />);
    const breadcrumbs = wrapper.find('.breadcrumbs-page');

    breadcrumbs.forEach((breadcrumb, index) => {
      const isLastOne = index === categories.length - 1;
      expect(breadcrumb.text()).toBe(categories[index]);
      expect(breadcrumb.hasClass('breacrumbs-bold')).toBe(isLastOne);
    });
  });

  it('should display separation image between breadcrumbs', () => {
    const wrapper = shallow(<Breadcrumbs categories={categories} />);
    const separationSpace = wrapper.find('.breadcrumbs-separation-space');

    expect(separationSpace).toHaveLength(categories.length - 1);
    separationSpace.forEach((space) => {
      expect(space.prop('src')).toBe('chevron.svg');
      expect(space.prop('alt')).toBe('Flecha');
    });
  });
});
