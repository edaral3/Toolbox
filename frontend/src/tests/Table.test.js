import React from "react";
import renderer from "react-test-renderer";
import Table from '../Components/Table';

it('Table', async () => {

    const header = ['File name', 'Text', 'Number', 'Hex']

    const files = [{
        "file": "file.csv",
        "lines": [
            {
                "text": "Hello worls",
                "number": "1",
                "hex": "2"
            }
        ]
    },]

    const component = renderer.create(
        <Table header={header} data={files} />
    );
    const testInstance = component.root;
    expect(testInstance.findAllByType("th")[0].props.children).toBe('File name');
    expect(testInstance.findAllByType("th")[1].props.children).toBe('Text');
    expect(testInstance.findAllByType("th")[2].props.children).toBe('Number');
    expect(testInstance.findAllByType("th")[3].props.children).toBe('Hex');
    
    expect(testInstance.findAllByType("td")[0].props.children).toBe('file.csv');
    expect(testInstance.findAllByType("td")[1].props.children).toBe('Hello worls');
    expect(testInstance.findAllByType("td")[2].props.children).toBe('1');
    expect(testInstance.findAllByType("td")[3].props.children).toBe('2');
});