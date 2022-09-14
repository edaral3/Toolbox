# Toolbox
 
## backend y forntend
El backend cuenta unicamente con dos comandos: npm test y npm start para poner a funcionar la aplicacion unicamente se necesita ejecutar el comando npm install.

Para la ejecuacion los puertos 8080 y 3030 deben de estar libres ya estos son los que son utilizasod por el backend y el frontend.

### backend
Puerto: 8080
Ruta 1: Devuelve los nombres de los archivos http://localhost:8080/files/list
Ruta 2: Devuelve todos los archivos en formato JSON http://localhost:8080/files/data
Ruta 3: Devuelve un archivo en formato JSON por su nombre http://localhost:8080/files/data?fileName={nombre del archivo}

Tests: npm test
Run: npm Run

### frontend
Puerto: 3030
Ruta: http://localhost:3030/
Cors: se debe de desabilitar los CORS del navegador para que esta pueda conetarse a la API

En el caso de los test la api debe de estar funcionando ya que los test realizan peticiones a la API de lo contrario estos fallaran. 
Tests: npm tes
Run: npm Run

## Docker
Para realizar una ejecucion en docker unicamente se debe de ejecutar el comando docker compose up en la carpeta raiz del repositorio.