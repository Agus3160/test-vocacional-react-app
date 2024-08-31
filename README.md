# RIASEC Vocational Test App

This is a React application designed to manage a vocational test based on the RIASEC model. The app is built using Vite and leverages various modern tools and libraries, including React, React Router DOM, React Hook Form, TypeScript, Tailwind CSS, and Zod.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **Multi-Step Form**: The core feature of this application is a multi-step form used to conduct a vocational test based on the RIASEC model.
- **RIASEC Test Management**: Collect user inputs and calculate scores across different RIASEC domains.
- **Responsive Design**: The app is fully responsive, ensuring a seamless experience on both desktop and mobile devices.
- **Form Validation**: Robust form validation powered by Zod and React Hook Form.
- **Type Safety**: Built with TypeScript, ensuring type safety and code reliability.

## Tech Stack

- **React**: For building the user interface.
- **React Router DOM**: For managing navigation and routing within the application.
- **React Hook Form**: For handling form state and validation.
- **TypeScript**: For static typing and enhanced code quality.
- **Tailwind CSS**: For styling and responsive design.
- **Zod**: For schema validation and form input validation.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Agus3160/test-vocacional-react-app
   ```
   
2. Install all the dependencies:
    ```bash
        npm install
    ```
    
3. Run the project:
    ```bash
        npm run dev
    ```

## Usage

- **Navigating the Form**: The form is split into multiple steps, guiding users through a series of questions to determine their RIASEC profile.

- **Validation**: Each step of the form includes validation rules, ensuring users provide the necessary information before proceeding.

- **Submission**: Upon completing the test, the application calculates and displays the user's RIASEC profile, suggesting potential career paths based on their scores.