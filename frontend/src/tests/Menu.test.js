import React from "react";
import renderer from "react-test-renderer";
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Menu from '../Components/Menu';

it('Menu', async () => {
    const initialState = {}
    const mockStore = configureStore()

    const store = mockStore(initialState)
    const component = renderer.create(
        <Provider store={store}> <Menu names={['File1.csv', 'File2.csv']} /></Provider>
    );
    const testInstance = component.root;

    expect(testInstance.findAllByType("option")[0].props.value).toBe('ALL');
    expect(testInstance.findAllByType("option")[1].props.value).toBe('File1.csv');
    expect(testInstance.findAllByType("option")[2].props.value).toBe('File2.csv');
});