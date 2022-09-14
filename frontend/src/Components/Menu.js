import React, { useState } from "react";
import Form from 'react-bootstrap/Form';

import { useDispatch } from "react-redux";
import { getFiles, getFile } from "../redux/files";

export default function MenuComponent({ names }) {
    const dispatch = useDispatch();
    const [fileName, setFile] = useState('ALL');

    // Cambiar el valor de la store con los cambios en la lista
    const changueData = (name) => {
        setFile(name);
        if (name !== 'ALL') {
            dispatch(getFile(name))
        } else {
            dispatch(getFiles())
        }
    }

    return (
        <div>
            <Form.Group controlId="formBasicSelect">
                <Form.Label>File Names</Form.Label>
                <Form.Control as="select" value={fileName} onChange={(e) => changueData(e.target.value)}>
                    <option value={'ALL'}>ALL</option>
                    {names.map((item, index) => {
                        return <option key={'key' + index} value={item}>{item}</option>
                    })}
                </Form.Control>
            </Form.Group>
        </div>
    );
}