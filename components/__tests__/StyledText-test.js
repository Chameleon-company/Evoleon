// Importing necessary libraries
import React from 'react';
import renderer from 'react-test-renderer';

// Importing components
import { MonoText } from '../StyledText';

// Unit test for MonoText component
describe('MonoText component', () => {
  it('renders correctly', () => {
    // Render the MonoText component
    const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

    // Compare the snapshot of the rendered tree
    expect(tree).toMatchSnapshot();
  });
});
