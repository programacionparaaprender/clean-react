# Getting Started with Create React App

## curso
>- https://www.udemy.com/course/react-js-para-principiantes-desde-cero-curso-gratuito/learn/lecture/30520528#overview

## Sección 1: Preparando nuestro entorno de trabajo

### 1. Instalando IDE (Visual Studio Code, Atom y Sublime Text)

### 2. Instalando extensiones Visual Studio Code

### 3. Instalando NodeJS y Yarn

### 4. Instalando git y creando cuenta GitHub

## Sección 2: Introducción

### 5. Primeros pasos con React

### 6. Qué es React y sus Ventajas

### 7. Primeros pasos
>- npx create-react-app react-crud
>- cd react-crud
>- npm install react-router-dom
>- npm install web-vitals
>- npm install bootstrap@5.3.3
>- npm run start

### 8. React Developer Tools

### 9. JSX
```
const welcome = <h1>Hello, world!</h1>;
const name = "Rafa";
const welcome = <h1>Hello, {name}</h1>;
```

### 10. Tipos de Componentes
```function welcome(props){
return <h1>Hello, {props.name}</h1>;
}
class Welcome extends React.Component {
render(){
	return <h1>Hello, {this.props.name}</h1>;
}
}
```
### 11. Props

### 12. Hook: useState
>- npm install web-vitals


### 13. Hook: useEffect

### 14. React Router Dom
>- yarn add react-router-dom


### 15. React Router Dom Dinámico

### 16. Proyecto que vamos a ver
>- https://github.com/ratasi/rick-morty/

### 17. Creando nuestra app

### 18. Comenzando la aplicación

### 19. API Rick & Morty

### 20. Haciendo peticiones a la API

### 21. Pasando State con Datos


### 22. Creando componente de los personajes

### 23. Aplicando Ternarios

### 24. Recorriendo los datos que vienen de la API

### 25. Poniendo estilos a los bloques

### 26. Ultimando detalles

### 27. Enlace de volver a la home

### 28. Configurando cuenta de GitHub para subir el proyecto

### 29. Subiendo el proyecto a Github

### 30. Subiendo nuestra app a un dominio público - Componetamente gratis



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
