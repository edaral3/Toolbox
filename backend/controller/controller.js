const axios = require('axios')

//  Configuracion en axios de los headers y la baseURL
const newAxios = axios.create({
    headers: {
        Authorization: 'Bearer aSuperSecretKey',
        contentType: 'application/json'
    },
    baseURL: 'https://echo-serv.tbxnet.com/v1/secret/'
})

// Funcion que devuelve el nombre de los archivos
exports.getFiles = async (_req, res) => {
    try {
        const data = await newAxios.get('files')
        return res.send(data.data)
    } catch (error) {
        return res.status(400).json(error)
    }
}

//  Obtie todos los archivos
const getAllFiles = async () => {
    const data = await newAxios.get('files')
    const files = []
    for (const i in data.data.files) {
        try {
            files.push(await getFile(data.data.files[i]))
        } catch { }
    }
    return files
}

//  Obtie un archivo por su nombre
const getFile = async (name) => {
    const file = await newAxios.get('file/' + name)
    return formatData(name, file.data)
}

// Funcion que devuelve los archivos en JSON
exports.downloadFiles = async (req, res) => {
    try {
        const name = req.query.fileName
        let result = null
        if (!name) {
            result = await getAllFiles()
        } else {
            result = await getFile(name)
        }

        return res.send(result)
    } catch (error) {
        return res.status(400).json({ message: 'Error' })
    }
}

// Aplica el formato requerido a los archivos
const formatData = (name, text) => {
    const lines = text.split('\n')
    if (lines.length === 1) {
        throw new Error('Archivo vacio')
    }
    const linesArray = lines.reduce((result, line) => {
        const data = line.split(',')
        if (data.length === 4) {
            result.push({
                text: data[1],
                number: data[2],
                hex: data[3]
            })
        }
        return result
    }, [])

    linesArray.shift()

    return { file: name, lines: linesArray }
}
