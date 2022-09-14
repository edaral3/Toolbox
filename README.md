# Toolbox
 
Para la ejecuacion los puertos 8080 y 3030 deben de estar libres ya estos son los que son utilizasod por el backend y el frontend.

### backend
Link
Puerto: 8080
Rutas
- Devuelve los nombres de los archivos: http://localhost:8080/files/list
- Devuelve todos los archivos en formato JSON: http://localhost:8080/files/data
- Devuelve un archivo en formato JSON por su nombre: http://localhost:8080/files/data?fileName={nombreDelArchivo}

Comandos
- Tests: npm test
- Run: npm start

### frontend

Instrucciones
- Cors: se debe de desabilitar los CORS del navegador para que esta pueda conetarse a la API.
- En el caso de los test la api debe de estar funcionando ya que los test realizan peticiones a la API de lo contrario estos fallaran.

Link
- Puerto: 3030
- Ruta: http://localhost:3030/

Comandos
- Tests: npm tes
- Built: npm run build
- Run: npm start



## Docker
Para realizar una ejecucion en docker unicamente se debe de ejecutar el comando docker compose up en la carpeta raiz del repositorio.