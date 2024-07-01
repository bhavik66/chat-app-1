# Chat App

## Overview

Chat App is a modern web application designed to provide a seamless and interactive chat experience.

## Technologies Used

- **React**: ^18.3.1
- **Redux-Saga**: ^1.3.0
- **Redux Toolkit**: ^2.2.6
- **TypeScript**: ^5.2.2
- **Styled Components (Emotion.sh)**: ^11.11.5
- **Styled-System**: ^5.1.5
- **Vite**: ^5.0.8

## Project Structure

This project follows an atomic design structure:

- **Atoms**: Basic building blocks like buttons and inputs.
- **Molecules**: Combinations of atoms forming small components like forms or cards.
- **Organisms**: Complex components that form distinct sections of the application like headers and footers.
- **Templates**: Page-level layout components.
- **Pages**: Complete pages consisting of organisms and templates.

## Error Handling

The project uses `react-error-boundary` to handle errors gracefully within the application. This library provides a React component to catch JavaScript errors anywhere in the component tree and display a fallback UI instead of crashing the application.

## Getting Started

To get started with the Chat App, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bhavik66/chat-app-1.git
   cd chat-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

## Running Tests

To run tests for the project, use the following command:

```bash
npm test
```

## Scripts

- **Run Tests:**
  ```bash
  npm test
  ```

- **Development Server:**
  ```bash
  npm run dev
  ```

- **Build for Production:**
  ```bash
  npm run build
  ```

- **Lint the Code:**
  ```bash
  npm run lint
  ```

- **Preview the Production Build:**
  ```bash
  npm run preview
  ```