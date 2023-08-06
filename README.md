# Grammar Bot

Grammar Bot is a simple bot that uses OpenAI's GPT-3.5 language model to check and correct grammar in sentences.

## Features

- Checks and corrects grammar in sentences.
- Utilizes OpenAI's GPT-3.5 language model for language processing.

## Tech stack

- Node.js
- Express.js
- OpenAI GPT-3.5
- SQLite3
- HTML
- CSS
- JavaScript

## Prerequisites

- Node.js (v18 or higher)
- npm (Node Package Manager)

## Installation

- `cd backend && echo "OPENAI_API_KEY=your_api_key_here" > .env && cd ..` - run this command and replace `your_api_key_here` with your openai api key.
- `npm start` - It will run a bash script to install dependencies and start the server. The frontend will be accessible at [**here**](http://localhost:8080/)

## API Commands

#### After the server is up and running, you can interact with the APIs:

- [**GET /corrections**](http://localhost:8080/api/corrections) - API to retrieve and display all correction pairs (original and corrected sentences) from the database:

- [**GET /random**](http://localhost:8080/api/random) - API to retrieve and display a random correction pair from the database.
