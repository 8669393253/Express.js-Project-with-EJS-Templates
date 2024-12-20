markdown
# Express.js Project with EJS Templates

This is a simple Express.js web application that uses EJS (Embedded JavaScript) templates for rendering dynamic content. The project includes routes for:
- A homepage displaying some static and dynamic content.
- A page to display a random dice roll.
- A dynamic Instagram profile page based on the username passed in the URL.

## Features
- **Home Page**: Displays a static message and a list of technologies.
- **Instagram Page**: Displays the Instagram username dynamically passed in the URL.
- **Dice Roll Page**: Displays a random dice roll value (between 1 and 6) and prompts the user to roll again if the value is 6.

## Tech Stack
- **Node.js**
- **Express.js**
- **EJS (Embedded JavaScript)**

## Prerequisites

Before you begin, ensure that you have the following installed on your local machine:

- **Node.js**: You can download it from [https://nodejs.org/](https://nodejs.org/).
- **npm**: npm is included with Node.js, but make sure it's up-to-date by running `npm install -g npm`.

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/express-ejs-project.git
    cd express-ejs-project
    ```

2. **Install Dependencies**:
    Run the following command to install all the necessary packages:
    ```bash
    npm install
    ```

3. **Project Structure**:
    The project is organized as follows:
    express-ejs-project/
    ├── views/
    │   ├── home.ejs
    │   ├── Instagram.ejs
    │   └── dice.ejs
    ├── app.js
    ├── package.json
    └── README.md

## Usage

### 1. **Run the Server**:
   Start the Express server using the following command:
   ```bash
   npm start
   ```

   The server will run on [http://localhost:8080](http://localhost:8080).

### 2. **Routes**:
   - **Home Page**: Visit [http://localhost:8080](http://localhost:8080) to see the homepage.
   - **Instagram Page**: Visit [http://localhost:8080/Instagram/:username](http://localhost:8080/Instagram/:username) to see the Instagram page for a specific username. Replace `:username` with an actual username (e.g., `/Instagram/john_doe`).
   - **Dice Roll Page**: Visit [http://localhost:8080/rollDice](http://localhost:8080/rollDice) to see a random dice roll. The page will display a message if the value is `6`.

### Example Output:

- **Home Page**: Displays a message saying "Hello all I'm 24" (evaluating `20 + 4` in the EJS template) and a list of technologies.
  
- **Instagram Page**: If you visit `/Instagram/john_doe`, it will show "This page belongs to @john_doe".

- **Dice Roll Page**: If you visit `/rollDice`, it will show something like "Dice roll and number generated is: 4", and if the value is `6`, it will prompt the user with "Nice!! roll dice again".

## Code Explanation

### 1. **Express Server (app.js)**:
   - Sets up the server to listen on port 8080.
   - Defines routes for rendering EJS templates.
   - Passes dynamic data (like the dice roll value or Instagram username) to the views.

### 2. **EJS Templates**:
   - `home.ejs`: Displays a static greeting message and a list of technologies.
   - `Instagram.ejs`: Displays the Instagram username dynamically passed through the URL.
   - `dice.ejs`: Displays a random dice roll value and encourages the user to roll again if they roll a `6`.

### 3. **How EJS Renders Data**:
   - EJS templates use `<%= %>` to render values passed from the server, and `<% %>` for conditional logic and other JavaScript code.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
