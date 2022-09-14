import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from "./Components/Table";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu"

// redux
import { useSelector, useDispatch } from "react-redux";
import { getFiles, getNames } from "./redux/files";

const App = () => {
    const dispatch = useDispatch();

    // Obtiene data del store
    const files = useSelector((store) => store.files.files);
    const names = useSelector((store) => store.files.names);

    useEffect(() => {
        //  Con ayuda de redux ejecuta funciones para obtener informacion de la API
        dispatch(getNames())
        dispatch(getFiles())
    }, []);

    const header = ['File name', 'Text', 'Number', 'Hex']
    return (
        <div>
            <Navbar title={"Toolbox :)"} />
            <div className="row">
                <Menu names={names} />
            </div>
            <div className="row" >
                <Table header={header} data={files} />
            </div>
        </div>
    );
};

export default App;