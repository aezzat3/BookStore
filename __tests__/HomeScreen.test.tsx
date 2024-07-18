import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../src/screens/HomeScreen';
import {QueryClient, QueryClientProvider} from 'react-query';

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
