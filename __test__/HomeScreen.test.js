
import React from 'react';
import { FlatList, Text } from 'react-native';
import renderer from 'react-test-renderer';
import HomeScreen from '../Screens/HomeScreen'

test('renders correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the FlatList Component', ()=>{
  const tree = renderer.create(
    <FlatList 
      data={['commit1', 'commit2', 'commit3']}
      keyExtractor={item => item}
      renderItem={({item}) => <Text>{item}</Text>}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});