import React from 'react';
import { shallow } from 'enzyme';
import Container from '../../src/components/container/Container';

describe('Container', () => {
    test('renders without crashing', () => {
        shallow(<Container />);
    });
});
  