# Hype Acme Inc. React App

## :rocket: Technologies

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Stitches](https://stitches.dev/)
- [Jotai](https://jotai.org/)

## 💻 About the project

Frontend application simulating an e-commerce app.
All the data is generated and stored on client-side.

## 📥 Running the project

```bash
$ git clone https://github.com/matheuspaolini/hype-acme-inc-react-app.git && cd hype-acme-inc-react-app
```

```bash
# Install dependencies
$ npm install
#or
$ yarn

# Running project in development mode
$ npm run dev
#or
$ yarn dev

# Running project in production mode
$ npm run build && npm run preview
#or
$ yarn build && yarn preview
```

## 🧱 Project Structure

- Domain

  - App entities interfaces, such as product, cart, and checkout.
  - App business rules, contains all the independent logic implementation.

- Application

  - Contains the Jotai store/atoms that implements the business rules on domain layer.
  - A factory function to generate the mocked produc list.
  - Utils folder with encapsulated functions to make easier to create the product list.
  - Also the 'Acme Inc Http Get Client', a mocked http client to simulate getting the product list from an external API.

- Data

  - Contains hardcoded data.

- Presentation

  - Hooks.
  - Components.
  - Feature components (separated sections placed inside each page).
  - Layouts (essential components to create the App layout).
  - Pages.
  - Styles configuration and setup.
  - Utils, such as price formatter, and open in new tab functions.

- Main
  - App Router -> [React Router](https://reactrouter.com/en/main)
  - App file entry point (index.tsx).
