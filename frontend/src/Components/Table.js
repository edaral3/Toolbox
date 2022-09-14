import React from "react";
import Table from 'react-bootstrap/Table';

export default function TableComponent({ header, data }) {

    // Decuelve las filas de la tabla
    const getRow = (fileName, row) => {
        return (
            <>
                <td>{fileName}</td>
                <td>{row.text}</td>
                <td>{row.number}</td>
                <td>{row.hex}</td>
            </>
        )
    }

    // Decuelve el body de la tabla
    const getBody = () => {
        return data.map(file => {
            return file.lines.map((row, index) => {
                return <tr key={'key' + index}>{getRow(file.file, row)}</tr>
            })
        })
    }

    // Decuelve el header de la tabla
    const getHeader = () => {
        return header.map(item => {
            return <th key={'key' + item}>{item}</th>
        })
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {getHeader()}
                </tr>
            </thead>
            <tbody>
                {getBody()}
            </tbody>
        </Table>
    );
}