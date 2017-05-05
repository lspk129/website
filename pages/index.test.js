import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from './index';

describe('With Enzyme', () => {
  it('App shows Next.js', () => {
    const app = shallow(
      <App />
    );

    expect(app.find('p').text()).toEqual('Next.js');
  });
});

describe('With Snapshot Testing', () => {
    it('App shows Next.js', () => {
        const component = renderer.create(<App />);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});