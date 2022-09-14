import React from "react";
import renderer from "react-test-renderer";
import Navbar from '../Components/Navbar';


it('Navbar', () => {
    const component = renderer.create(
        <Navbar title={'Toolbox :)'} />
    );
    const testInstance = component.root;
    expect(testInstance.findByType("label").props.children).toBe('Toolbox :)');
});