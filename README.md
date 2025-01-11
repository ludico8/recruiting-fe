
# Recruiting App Frontend

This is the frontend for the Recruiting App, built with **React**, **TypeScript**, and **Vite**. It provides an interface for interacting with the backend services.

---

## Prerequisites

Before setting up the project, ensure you have the following installed on your machine:

- **Node.js** (v16 or higher recommended) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** - [Download Yarn](https://yarnpkg.com/)

---

## Installation

To set up the project locally:

1. Clone the repository:
   ```bash
   git clone git@github.com:your-username/recruiting-fe.git
   ```
2. Navigate to the project directory:
   ```bash
   cd recruiting-fe
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   Or, if you prefer Yarn:
   ```bash
   yarn install
   ```

---

## Running the Development Server

To start the development server and view the application in your browser:

1. Run the development server:
   ```bash
   npm run dev
   ```
   Or, using Yarn:
   ```bash
   yarn dev
   ```
2. Open the application in your browser by visiting the URL provided in the terminal, typically:
   ```
   http://localhost:5173
   ```

---

## Build and Preview

To create an optimized production build and preview it locally:

1. Build the project:
   ```bash
   npm run build
   ```
   Or, using Yarn:
   ```bash
   yarn build
   ```
2. Serve the build:
   ```bash
   npm run preview
   ```
3. Open the preview in your browser by visiting the URL provided in the terminal, typically:
   ```
   http://localhost:4173
   ```

---

## Environment Variables

This project may require environment variables for API interactions. Set them up in a `.env` file at the root of the project.

Example `.env` file:
```plaintext
BE_API_BASE_URL=http://localhost:3000/api
```

---

## Additional Commands

- **Lint the Code:** To check for and fix coding style issues:
  ```bash
  npm run lint
  ```
- **Format the Code:** If Prettier is configured, you can format the code:
  ```bash
  npm run format
  ```

---

## Contributing

If you'd like to contribute to this project:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your changes here"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a Pull Request.

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Authors

- **Your Name** - [GitHub Profile](https://github.com/your-username)

---

Feel free to customize this README further with project-specific details! 🚀
