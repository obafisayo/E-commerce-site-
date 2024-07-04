# E-commerce-site README

This README provides comprehensive instructions for setting up and running the e-commerce site. Whether you're starting a new project or contributing to an existing one, follow these steps to get up and running quickly.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Development Flow](#development-flow)
- [CSS Preprocessor](#css-preprocessor)

## Prerequisites
Before you begin, ensure that you have the following installed on your system:
- [Node.js](https://nodejs.org/) (with npm)
- [Git](https://git-scm.com/)

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/obafisayo/e-commerce-site.git
   cd e-commerce-site
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

## Available Scripts
In the project directory, you can run the following commands:

- **Start the App Locally**:
  ```bash
  npm start
  ```
  This will launch the site in your development environment at [http://localhost:3000](http://localhost:3000).

- **Run Tests (Watch Mode)**:
  ```bash
  npm test
  ```

- **Run Linter**:
  ```bash
  npm run lint
  ```

- **Build for Production**:
  ```bash
  npm run build
  ```

## Development Flow
Follow these steps when working on new features or bug fixes:

1. Transition the status of the card that describes the feature/bug you'll be working on in your issue tracker.
2. Create a local branch using Git:
   ```bash
   git checkout -b <feature|bug|enhancement|doc>/<issue-tracker-number>-<short-description>
   ```
   For example: `feature/96-add-navigation-sidebar`.
3. Develop the new feature, committing atomic changes to your local branch.
4. Before creating a Pull Request, ensure that tests pass (`npm test`).
5. Push your changes to the remote repository:
   ```bash
   git push -u origin <your-branch-name>
   ```
6. Create a new Pull Request with your changes.
7. After approval, merge your code via the GitHub UI.
8. Don't forget to transition your issue tracker card to "Done."
