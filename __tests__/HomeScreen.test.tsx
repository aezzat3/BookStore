import React from 'react';
import {render} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import HomeScreen from '../src/Screens/HomeScreen';

const queryClient = new QueryClient();

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const tree = render(
      <QueryClientProvider client={queryClient}>
        <HomeScreen />
      </QueryClientProvider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
