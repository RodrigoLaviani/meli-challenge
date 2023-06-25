# Meli Frontend Challenge

## Instalación

Utilice las version 18 de node.
Recomiendo instalar [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/) para poder usar el versión de NodeJs de los proyectos.

## Ejecución

Para levantar la aplicación es necesario ejecutar los siguientes comandos:

#### Para el backend:

```
cd backend
nvm use (para usar el node del proyecto, si no lo tiene va a tener que usar nvm install 18.0.0)
npm install
npm run start
```

#### Para el frontend:

```
cd frontend
nvm use (para usar el node del proyecto, si no lo tiene va a tener que usar nvm install 18.0.0)
npm install
npm run start
```

## Tests

Se corren ejecutando el comando en cada proyecto:

`npm test`

# Overview

Para realizar la aplicación utilicé el stack de tecnologías pedido en la consigna.
El Frontend está desarrollado con React, Sass para los estilos, react-helmet-async para el SEO.
El Backend esta compuesto en capas para facilitar su testeo utilizando Express, use Jest para lo que es el backend 
con la libreria supertest para mockear las request a los endpoints.


## Backend

El Backend se encuentra dividido en tres capas:

1. Controllers
2. Handlers
3. Servicios

La responsabilidad del controller es dar una respuesta al pedido con un http status y un payload
dependiendo de que viene en el handler.
Los handlers son los encargados de consumir los servicios y armar una respuesta para entregarle al controller.
Los servicios tienen como tarea consumir los recursos externos, en este caso la api de Mercado Libre.

## Frontend

El Frontend consiste en el Header que contiene la barra de búsqueda y dos vistas:

1. SearchResult
2. ItemDetail

La vista de Search muestra los resultados de la búsqueda.
La vista de Detail muestra el detalle de un item.

Utilice react-router-dom para lo que es la navegación.

# Consideraciones

## Generales

1. Limité la cantidad de items (4) del lado del servidor a modo de reducir el tamaño de la respuesta.
2. Utilizo enzyme (la libreria de Airbnb) para unit tests por una cuestion de familiaridad y conocimiento de la misma.
3. La categoría del item no forma parte del contrato para el endpoint de detalle, por esto no se incluyó en esa vista.
4. Se puede acceder a la vista de detalle de item con el ID del mismo por medio de la URL.
5. No utilice branch como gitflow porque soy el único en el proyecto.

## Mejoras

De tener más tiempo para dedicarle a la aplicación, tendría en cuenta las siguientes mejoras:

1. Cantidad de Unit Tests
2. Implementación de Loader y Mensajes de Error
3. Mejoras en la UX