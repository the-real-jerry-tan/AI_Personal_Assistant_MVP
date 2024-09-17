AI-Powered Chatbot

An intelligent, AI-powered chatbot built using TypeScript. This chatbot leverages advanced natural language processing to interact with users in a conversational manner.
Table of Contents

    Features
    Demo
    Installation
        Prerequisites
        Getting Started
    Usage
        Running the Chatbot
        Available Scripts
    Configuration
    Technologies Used
    Contributing
    License
    Contact Information

Features

    Natural Language Understanding: Interprets user inputs to provide meaningful responses.
    Contextual Conversations: Maintains context throughout the conversation for more coherent interactions.
    Extensible Architecture: Easily add new features or integrate with other services.
    TypeScript Support: Strongly typed codebase for better maintainability and scalability.

Demo

Click here to see a live demo of the chatbot in action.
Installation
Prerequisites

    Node.js v14.0 or higher
    npm v6.0 or higher
    TypeScript installed globally (npm install -g typescript)

Getting Started

    Clone the Repository

    bash

git clone https://github.com/yourusername/ai-powered-chatbot.git

Navigate to the Project Directory

bash

cd ai-powered-chatbot

Install Dependencies

bash

npm install

Set Up Environment Variables

Create a .env file in the root directory and add the following:

env

OPENAI_API_KEY=your_openai_api_key
CHATBOT_NAME=YourChatbotName

Build the Project

bash

npm run build

Start the Chatbot

bash

    npm start

    The chatbot should now be running at http://localhost:3000.

Usage
Running the Chatbot

    In Development Mode

    bash

npm run dev

This will start the chatbot with hot-reloading enabled.

In Production Mode

bash

    npm start

Available Scripts

    npm run build: Compiles the TypeScript code into JavaScript.
    npm run dev: Starts the development server with hot-reloading.
    npm run lint: Runs ESLint to analyze code for potential errors.
    npm test: Runs the test suite.

Configuration

The chatbot can be configured via the .env file:

    OPENAI_API_KEY: Your OpenAI API key for accessing GPT models.
    CHATBOT_NAME: The name of your chatbot.
    PORT: The port on which the chatbot will run (default is 3000).

Technologies Used

    TypeScript: For a strongly-typed development experience.
    Node.js: JavaScript runtime environment.
    Express.js: Web framework for Node.js.
    Socket.IO: Enables real-time, bidirectional communication.
    OpenAI API: Provides advanced AI capabilities.
    dotenv: Loads environment variables from a .env file.
    ESLint & Prettier: For code linting and formatting.

Contributing

Contributions are welcome! Please follow these steps:

    Fork the Repository

    Click the "Fork" button at the top right of the repository page.

    Clone Your Fork

    bash

git clone https://github.com/the-real-jerry-tan/ai-powered-chatbot.git

Create a Branch

bash

git checkout -b feature/YourFeature

Commit Your Changes

bash

git commit -m "Add Your Feature"

Push to Your Fork

bash

    git push origin feature/YourFeature

    Submit a Pull Request

    Go to the original repository and click "New Pull Request".

License

This project is licensed under the MIT License
