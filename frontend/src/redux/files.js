/*eslint-disable*/
import axios from "axios";

// Data inicial
const dataInicial = {
  files: [],
  names: []
};

const SET_NAMES = "SET_NAMES";
const SET_FILES = "SET_FILES";

// Reductor
export default function filesReducer(state = dataInicial, action) {
  switch (action.type) {
    case SET_NAMES:
      return { ...state, names: action.payload };
    case SET_FILES:
      return { ...state, files: action.payload };
    default:
      return state;
  }
}

//  Obtiene todos los archivos de la API
export const getFiles = () => async (dispatch) => {
  try {
    let res = await axios.get("/files/data");
    dispatch({
      type: SET_FILES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SET_FILES,
      payload: [],
    });
    console.error("error")
  }
};

//  Obtiene un archivo de la API por nombre
export const getFile = (name) => async (dispatch) => {
  try {
    let res = await axios.get("/files/data?fileName=" + name);
    dispatch({
      type: SET_FILES,
      payload: [res.data],
    });
  } catch (error) {
    dispatch({
      type: SET_FILES,
      payload: [],
    });
    console.error("error")
  }
};

//  Obtiene los nombres de los archivos de la API
export const getNames = () => async (dispatch) => {
  try {
    let res = await axios.get("/files/list");
    dispatch({
      type: SET_NAMES,
      payload: res.data.files,
    });
  } catch (error) {
    console.error("error")
  }
};
