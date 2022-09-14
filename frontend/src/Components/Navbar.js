import React from "react";
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarComponent({ title }) {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="">{
                    <label className="label">{title}</label>
                }</Navbar.Brand>
            </Navbar>
            <br />
        </>
    );
}