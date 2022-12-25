# Getting Started with Create React App Typescript

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Operation and Build environment

- Node.js `^16.15.0`
- npm `^8.5.5`

- React `^18.2.0`
- TypeScript `^4.9.4`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint`

Check the linting code

### `npm run lint:fix`

Auto fix the code by lint rule

## What's Included?

- **Navigation System**
  - React Router Dom V6
- **State Management**
  - React-redux + Redux-toolkit + Redux-thunk
- **Code-format and check**
  - Eslint
  - Tslint
  - Prettier
- **CSS**
  - Sass
  - Css module

## Base Project Structure

```
├───src
│   ├───@type
│   ├───asserts
│   │   ├───fonts
│   │   ├───icons
│   │   ├───images
│   ├───components
│   │   ├───Layout
│   │   ├───Loading
│   │   └───Others...
│   ├───containers
│   │   ├───Controls
│   │   └───Others...
│   ├───context
│   │   ├───OthersContext...
│   ├───hooks
│   │   └───custom-hook...
│   ├───pages
│   │   ├───HomePage
│   │   └───OthersPage...
│   ├───redux
│   │   ├───features
│   │   ├───reducer.ts
│   │   └───store.ts
│   ├───services
│   │   ├───Http-Client
│   │   └───OthersService...
│   └───utils
├───eslintrc.json
├───.gitignore
├───.prettierrc
├───App.css
├───App.tsx
├───README.md
├───index.module.scss
├───index.tsx
├───package-lock.json
├───package.json
├───tsconfig.json
├───...
```

## Some popular library may we need in the next feature

- Redux Thunk/Saga + Redux Persist
- React Query
- React Hook Form/React Formik
- I18n
- Lodash
- Axios
- Husky + lint-staged for pre-commit check
