import React from 'react';
import { shallow } from 'enzyme';
import Waiter from './Waiter';
// import Button from '@material-ui/core/Button';

const mockProps = {
  fetchTables: jest.fn(),
  loading: {
    active: false,
    error: false,
  },
  tables: [
    {id: '1', status: 'free', order: null},
    {id: '2', status: 'thinking', order: null},
  ],
};

describe('Component Waiter', () => {
  it('renders without crashing', () => {
    expect(shallow(<Waiter {...mockProps}/>)).toBeTruthy();
  });
/*   it('renders Links', () => {
    const wrapper = shallow(<Waiter {...mockProps}/>);
    console.debug(wrapper);
    expect(wrapper.find(Button).length).toEqual(9);
  }); */
});