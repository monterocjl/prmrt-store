# Promart Store

Este proyecto consiste en una tienda que permite al usuario ver productos y poder agregarlos a un carrito de compras. En dicho carrito podrá definir la cantidad por producto añadido y también podrá eliminar productos del carrito.

## Configuración del proyecto

Luego de clonar el repositorio, deberás correr los siguientes comandos:

- Para instalar las dependencias necesarias:

  ```bash
  npm install
  ```

- Para correr el proyecto en desarrollo:
  ```bash
  npm run dev
  ```

## Desplegar proyecto en Firebase Hosting

En caso desees desplegar el proyecto en Firebase Hosting, deberás seguir las siguientes instrucciones:

- Instalar las herramientas de Firebase de manera global:

  ```bash
  npm i -g firebase-tools
  ```

- El siguiente comando abrirá una pestaña en tu navegador que permitirá que te loguees en Firebase:

  ```bash
  firebase login
  ```

- Ahora deberás iniciar el proceso de configuración de Firebase Hosting con el siguiente comando:

  ```bash
  firebase init
  ```

- Luego de seguir las instrucciones, deberás correr el siguiente comando para que se cree la carpeta 'build' con todo el proyecto compilado:

  ```bash
  npm run build
  ```

- Finalmente, deberás desplegar el proyecto en Firebase Hosting con el siguiente comando:

  ```bash
  firebase deploy
  ```
