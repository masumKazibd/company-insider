# CompanyInsider

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

## Docker Development (Zero Local Setup Required)

You **do not need Node.js or NPM installed on your local machine**. Docker Compose manages all dependencies, building, and serving inside the container with **Hot Reloading**.

### 1. Start Development Server with Fast Hot Reload
```bash
docker compose up --build
```
Open **`http://localhost:4200/`** in your browser. Uses native `inotify` file events and named cache volumes for **instant (<100ms) hot reloading** when files are updated in `src/`.

### 2. Common Docker Commands

- **Stop the app**:
  ```bash
  docker compose down
  ```

- **Generate Angular components** (without local Angular CLI):
  ```bash
  docker compose exec app npx ng generate component features/my-component
  ```

- **Install a new npm package** (without local NPM):
  ```bash
  docker compose exec app npm install <package-name>
  ```

- **Run tests**:
  ```bash
  docker compose exec app npm test
  ```

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
